import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoCompleteProps } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import { debounce } from '~shared/lib/utils';
import { AutoComplete, Button, Space } from '~shared/ui';

type SearchInputProps = {
  size?: AutoCompleteProps['size'];
  button?: boolean;
  placeholder?: AutoCompleteProps['placeholder'];
  onChange: (value: string) => void;
  onClear?: () => void;
  regexReplace?: RegExp;
} & Omit<AutoCompleteProps, 'value' | 'onChange' | 'placeholder'>;

export const SearchInput: React.FC<SearchInputProps> = ({
  size = 'large',
  button = true,
  placeholder = 'Search',
  onChange,
  onClear,
  regexReplace,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedResults = useMemo(() => {
    return debounce((value: string) => {
      onChange(value);
    }, 800);
  }, [regexReplace]);

  useEffect(() => {
    setSearchValue('');
  }, []);

  const handleChange = (value: string) => {
    const valueToSend = regexReplace ? value.replace(regexReplace, '') : value;
    setSearchValue(valueToSend);

    debouncedResults(value);
  };

  const handleClear = () => {
    setSearchValue('');
    onClear && onClear();
  };

  const { className, ...restProps } = props;

  return (
    <Space.Compact block className={className}>
      <AutoComplete
        value={searchValue}
        onChange={handleChange}
        size={size}
        placeholder={placeholder}
        className="w-full"
        {...restProps}
      />
      {button && (
        <Button
          type="primary"
          size={size}
          className="flex items-center justify-center overflow-hidden rounded-sm"
          onClick={handleClear}
        >
          {searchValue ? (
            <CloseOutlined className="text-[24px]" />
          ) : (
            <SearchOutlined className="text-[24px]" />
          )}
        </Button>
      )}
    </Space.Compact>
  );
};
