import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve((_req: Request) => Response.json({ message: "Hello World" }));
