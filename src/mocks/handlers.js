import { rest } from "msw";
import { baseUrl, geoDataUrl, reverseGeoDataUrl, weatherDataUrl } from "../api";
import {
  geoCodingApiMock,
  reverseGeoCodingApiMock,
  weatherDataApiMock,
} from "./responses";

const geoDataHandler = rest.get(
  `${baseUrl}${geoDataUrl}`,
  async (_, res, ctx) => res(ctx.json(geoCodingApiMock))
);

const reverseGeoDataHandler = rest.get(
  `${baseUrl}${reverseGeoDataUrl}`,
  async (_, res, ctx) => res(ctx.json(reverseGeoCodingApiMock))
);

const weatherDataHandler = rest.get(
  `${baseUrl}${weatherDataUrl}`,
  async (_, res, ctx) => res(ctx.json(weatherDataApiMock))
);

export const handlers = [
  geoDataHandler,
  reverseGeoDataHandler,
  weatherDataHandler,
];
