import { defaultLocale } from '@/i18n.config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	return NextResponse.redirect(new URL(defaultLocale, req.url));
}
