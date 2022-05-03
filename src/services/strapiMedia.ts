import { getStrapiURL } from "./strapiApi";

export function getStrapiMedia(media: Record<string, any>) {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
}