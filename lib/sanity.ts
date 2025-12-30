import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset, apiVersion } from '@/sanity/env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false so updates are seen immediately
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
