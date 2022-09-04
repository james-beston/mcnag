import {createPreviewSubscriptionHook, createCurrentUserHook} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {config} from './config'

const builder = imageUrlBuilder(config)

export const urlFor = (source) => builder.image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)