import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@ino-estc/core';

export const trpc = createReactQueryHooks<AppRouter>();