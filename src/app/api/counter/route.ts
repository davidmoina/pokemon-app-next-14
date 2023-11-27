export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  return Response.json({
    count: 100,
  });
}
