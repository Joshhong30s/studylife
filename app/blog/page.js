import Link from 'next/link'
export default function Blog(props) {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center px-16 py-4 w-full text-base leading-6 border-b border-solid bg-neutral-100 border-b-[color:var(--buttons-primary,#F90)] max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full'>
          <Link href='/'>
            <img
              loading='lazy'
              src='/logo.svg'
              className='self-stretch my-auto aspect-[2.33] w-[63px]'
            />
          </Link>
          <div className='flex gap-5 justify-between self-stretch my-auto text-black max-md:flex-wrap max-md:max-w-full'>
            <Link href='/tools'>
              <div className='grow whitespace-nowrap'>Tools</div>
            </Link>
            <Link href='/resource'>
              <div>Resources</div>
            </Link>
            <div className='flex gap-1 justify-between whitespace-nowrap'>
              <Link href='/blog'>
                <div className='grow'>Blogs</div>
              </Link>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/6cd2aad79b948b86b05b54d3ef2c978b60d18412e40aaad46b83857f998ea0b2?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
            </div>
            <Link href='/about'>
              <div>About</div>
            </Link>
          </div>
          <div className='justify-center self-stretch px-5 py-2 whitespace-nowrap bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] text-zinc-800'>
            Sign Up
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full'>
        <div className='mt-4 text-6xl font-bold text-center text-black leading-[67.2px] max-md:max-w-full max-md:text-4xl'>
          Discover the Best
        </div>
        <div className='mt-6 text-lg leading-7 text-center text-black max-md:max-w-full'>
          Stay updated with our latest blog posts.
        </div>
        <div className='flex gap-4 justify-between items-center mt-20 text-base leading-6 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
          <div className='grow justify-center self-stretch px-4 py-2 whitespace-nowrap'>
            View all
          </div>
          <div className='self-stretch my-auto'>學校介紹</div>
          <div className='self-stretch my-auto'>讀書計畫</div>
          <div className='flex-auto self-stretch my-auto'>英國生活</div>
          <div className='grow self-stretch my-auto whitespace-nowrap'>
            生涯規劃
          </div>
        </div>
        <div className='self-stretch mt-16 max-md:mt-10 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
            <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='/blog1.svg'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-9'>
                    The Ultimate Guide to Studying Abroad
                  </div>
                  <div className='mt-2 leading-6'>
                    Learn everything you need to know about studying abroad.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='/blog2.svg'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-9'>
                    How to Choose the Right University for You
                  </div>
                  <div className='mt-2 leading-6'>
                    Discover the factors to consider when selecting a
                    university.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='/blog3.svg'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-9'>
                    Tips for a Successful Study Abroad Experience
                  </div>
                  <div className='mt-2 leading-6'>
                    Get advice on making the most out of your study abroad
                    journey.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch mt-16 mb-10 max-md:mt-10 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
            <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-8 whitespace-nowrap'>
                    The Benefits of Studying Abroad
                  </div>
                  <div className='mt-2 leading-6'>
                    Explore the advantages of pursuing an education abroad.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-9'>
                    How to Finance Your Study Abroad Program
                  </div>
                  <div className='mt-2 leading-6'>
                    Learn about different funding options for studying abroad.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-base leading-6 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='flex gap-4 self-start text-sm font-semibold'>
                    <div className='justify-center px-2 py-1 whitespace-nowrap aspect-[2.52] bg-zinc-100'>
                      Category
                    </div>
                    <div className='my-auto'>5 min read</div>
                  </div>
                  <div className='mt-4 text-2xl font-bold leading-9'>
                    The Impact of Studying Abroad on Your Career
                  </div>
                  <div className='mt-2 leading-6'>
                    Discover how studying abroad can enhance your professional
                    prospects.
                  </div>
                  <div className='flex gap-2 justify-center self-start mt-6 whitespace-nowrap'>
                    <div className='grow'>Read more</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f719bb05253aa232a43a56d2242cf528f51c9c7a1a5f219a25687bb89d63289b?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-6 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full'>
        <div className='mt-4 text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl'>
          Discover the World
        </div>
        <div className='mt-6 text-lg leading-7 text-black max-md:max-w-full'>
          Explore our comprehensive list of blog posts
        </div>
        <div className='self-stretch mt-20 max-md:mt-10 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
            <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col w-full text-sm leading-5 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='font-semibold'>Category</div>
                  <div className='mt-2 text-2xl font-bold leading-8 whitespace-nowrap'>
                    10 Tips for Studying Abroad
                  </div>
                  <div className='mt-2 text-base leading-6'>
                    Learn how to make the most of your study abroad experience
                  </div>
                  <div className='flex gap-4 justify-between mt-6'>
                    <img
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-12 aspect-square'
                    />
                    <div className='flex flex-col flex-1'>
                      <div className='font-semibold whitespace-nowrap'>
                        John Doe
                      </div>
                      <div className='flex gap-2 items-center'>
                        <div className='self-stretch my-auto whitespace-nowrap'>
                          11 Jan 2022
                        </div>
                        <div className='self-stretch text-lg'>•</div>
                        <div className='flex-auto self-stretch my-auto'>
                          5 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col w-full text-sm leading-5 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='font-semibold'>Category</div>
                  <div className='mt-2 text-2xl font-bold leading-8 whitespace-nowrap'>
                    The Benefits of Studying Abroad
                  </div>
                  <div className='mt-2 text-base whitespace-nowrap'>
                    Discover how studying abroad can change your life
                  </div>
                  <div className='flex gap-4 justify-between mt-6'>
                    <img
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-12 aspect-square'
                    />
                    <div className='flex flex-col flex-1'>
                      <div className='font-semibold whitespace-nowrap'>
                        Jane Smith
                      </div>
                      <div className='flex gap-2 items-center'>
                        <div className='self-stretch my-auto whitespace-nowrap'>
                          11 Jan 2022
                        </div>
                        <div className='self-stretch text-lg'>•</div>
                        <div className='flex-auto self-stretch my-auto'>
                          5 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow w-full text-sm leading-5 text-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-8'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&'
                  className='w-full aspect-[1.39]'
                />
                <div className='flex flex-col p-6 max-md:px-5'>
                  <div className='font-semibold'>Category</div>
                  <div className='mt-2 text-2xl font-bold leading-9'>
                    How to Choose the Right Study Abroad Program
                  </div>
                  <div className='mt-2 text-base leading-6'>
                    Find the perfect study abroad program for your goals
                  </div>
                  <div className='flex gap-4 justify-between mt-6'>
                    <img
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&'
                      className='w-12 aspect-square'
                    />
                    <div className='flex flex-col flex-1'>
                      <div className='font-semibold whitespace-nowrap'>
                        David Johnson
                      </div>
                      <div className='flex gap-2 items-center'>
                        <div className='self-stretch my-auto whitespace-nowrap'>
                          11 Jan 2022
                        </div>
                        <div className='self-stretch text-lg'>•</div>
                        <div className='flex-auto self-stretch my-auto'>
                          5 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='justify-center self-end px-6 py-3 mt-16 mb-10 text-base leading-6 text-black whitespace-nowrap border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5 max-md:mt-10'>
          View all
        </div>
      </div>
      <div className='flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1da1a324934a97ef9ac23b529ba73bd0001a9830e172970cea0aa8da1d6de1f?apiKey=074c83f0827040edbff71f710b0abb50&'
            className='my-auto aspect-[2.33] w-[63px]'
          />
          <div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full'>
            <div className='flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap max-md:max-w-full'>
              <div className='grow whitespace-nowrap'>Study Abroad</div>
              <div>Scholarships</div>
              <div className='flex-auto'>University Rankings</div>
              <div className='self-stretch leading-6'>Visa Information</div>
              <div className='grow whitespace-nowrap'>Study Tips</div>
            </div>
            <div className='flex gap-3 justify-end pl-20 my-auto'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f0e3563c2380fa8fa5ab25d7e1c2337d18927f82847daa2bf6a99bfe865dba3f?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/6e7d5eda8a0f7261f107f0b92459ddc2f1a54061fac6c83f557911968c853174?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/33755d587b2a466113c1c8a399a3233b5794b55f3f161ed1fe6fcbce07d66ddf?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/488fdb92119766b2aeedec62bb0e8a0bb877a8e08d003ffb0e667feccc872136?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/ec281d96021fd457cb1b4712a6911c7adedc1832ba12746bd1a19e3c2c10f3c7?apiKey=074c83f0827040edbff71f710b0abb50&'
                className='w-6 aspect-square'
              />
            </div>
          </div>
        </div>
        <div className='shrink-0 mt-20 h-px bg-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-10 max-md:max-w-full' />
        <div className='flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full'>
          <div className='grow text-black whitespace-nowrap'>
            © 2023 StudyLife. All rights reserved.
          </div>
          <div className='flex gap-5 justify-between text-black'>
            <div className='grow underline whitespace-nowrap'>
              Privacy Policy
            </div>
            <div className='flex-auto underline'>Terms and Conditions</div>
            <div className='grow underline whitespace-nowrap'>
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
