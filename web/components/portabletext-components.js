import { urlFor } from '@lib/sanity'
import Image from 'next/image'

export const portableTextComponents = {
  types: {
    customImage: ({value}) =>
      (
        <figure className="space-y-0">
          <div className="relative drop-shadow-md">
            <Image
              src={urlFor(value).width(1200).height(800).url()}
              alt=""
              width={1200}
              height={800}
            />
          </div>
          <figcaption>
            <span className="text-sm text-slate-500">Image: &copy;{value.credit}</span>
          </figcaption>
        </figure>
      ),
  }
}