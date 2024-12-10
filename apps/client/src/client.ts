import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { appRouter } from "trpc/trpc";

const client = createTRPCClient<appRouter>({

})
