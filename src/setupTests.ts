global.ResizeObserver = require('resize-observer-polyfill')
// eslint-disable-next-line import/no-extraneous-dependencies
import matchers from "@testing-library/jest-dom/matchers";

import { expect } from "vitest";

expect.extend(matchers);