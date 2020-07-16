import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '10ji8a3c',
    dataset: 'production',
    useCdn: true,
})