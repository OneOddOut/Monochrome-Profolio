import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    // Fetch the like count from the database
    const result = await sql`SELECT like_count FROM likes WHERE id = 1;`;

    // If no record found, return 0 likes
    if (result.rows.length === 0) {
      return NextResponse.json({ likeCount: 0 });
    }

    // Return the like count
    return NextResponse.json({ likeCount: result.rows[0].like_count });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to retrieve likes', error: (error as Error).message },
      { status: 500 }
    );
  }
}