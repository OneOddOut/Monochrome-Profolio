import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST() {
  try {
    // Increment the like count in the database
    const result = await sql`
      UPDATE likes
      SET like_count = like_count + 1 
      WHERE id = 1
      RETURNING like_count;
    `;

    // Return the updated like count
    return NextResponse.json({ likeCount: result.rows[0].like_count });
  } catch (error) {
    // Avoid using 'any' and cast error to 'Error'
    return NextResponse.json(
      { message: 'Failed to update likes', error: (error as Error).message },
      { status: 500 }
    );
  }
}