

export default function Resource(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 border-b border-solid bg-neutral-100 border-b-[color:var(--buttons-primary,#F90)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2307b7acf31def1efb2328f17c62e48da489deebec1df544912a96c98112f520?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="self-stretch my-auto aspect-[2.33] w-[63px]"
          />
          <div className="flex gap-5 justify-between self-stretch my-auto text-black max-md:flex-wrap max-md:max-w-full">
            <div className="grow whitespace-nowrap">Explore More</div>
            <div>Latest Posts</div>
            <div>Study Tips</div>
            <div className="flex gap-1 justify-between whitespace-nowrap">
              <div className="grow">Categories</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c81b8868c5766292161710ac715e38b074f060f3ac8ea486dd4ffac53006bd1?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
          <div className="justify-center self-stretch px-5 py-2 whitespace-nowrap bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] text-zinc-800">
            Sign Up
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="mt-16 text-base font-semibold leading-6 text-zinc-800 max-md:mt-10 max-md:max-w-full">
          Blog
        </div>
        <div className="mt-4 text-6xl font-bold leading-[67.2px] text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Discover the Best Resources
        </div>
        <div className="mt-6 text-lg leading-7 text-zinc-800 max-md:max-w-full">
          Explore our featured resources for studying abroad.
        </div>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b58a066b039edbe420e9d1a4641bd6f4f5151037ce6a83c643a19ec8478fabb9?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="grow w-full aspect-[1.32] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pl-12 my-auto text-sm leading-5 text-zinc-800 max-md:mt-10 max-md:max-w-full">
                <div className="font-semibold max-md:max-w-full">Category</div>
                <div className="mt-2 text-3xl font-bold leading-10 max-md:max-w-full">
                  10 Tips for a Successful Study Abroad Experience
                </div>
                <div className="mt-2 text-base max-md:max-w-full">
                  Learn how to make the most of your study abroad journey.
                </div>
                <div className="flex gap-4 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b49166a85818bca053cd6f87edf1adab9e1db033fb715797793bf3476665784?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="font-semibold max-md:max-w-full">
                      John Doe
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-wrap max-md:max-w-full">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto max-md:max-w-full">
                        5 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center mt-24 text-base leading-6 text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="grow justify-center self-stretch px-4 py-2 whitespace-nowrap border border-solid border-[color:var(--buttons-primary,#F90)]">
            View all
          </div>
          <div className="self-stretch my-auto">Category one</div>
          <div className="self-stretch my-auto">Category two</div>
          <div className="flex-auto self-stretch my-auto">Category three</div>
          <div className="grow self-stretch my-auto whitespace-nowrap">
            Category four
          </div>
        </div>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  How to Choose the Right Study Abroad Program
                </div>
                <div className="mt-2 text-base leading-6">
                  Find the perfect study abroad program that suits your goals.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      Jane Smith
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
                        7 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  Top 10 Universities for Studying Abroad
                </div>
                <div className="mt-2 text-base leading-6">
                  Discover the best universities around the world for studying
                  abroad.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      David Johnson
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
                        6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  How to Finance Your Study Abroad Experience
                </div>
                <div className="mt-2 text-base leading-6">
                  Learn about scholarships, grants, and other funding options
                  for studying abroad.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      Emily Davis
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
                        8 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-16 mb-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  Essential Packing Tips for Study Abroad
                </div>
                <div className="mt-2 text-base leading-6">
                  Pack smart and be prepared for your study abroad adventure.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      Sarah Thompson
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
                        4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  Study Abroad Safety Tips: Staying Safe While Exploring
                </div>
                <div className="mt-2 text-base leading-6">
                  Ensure a safe and enjoyable study abroad experience with these
                  tips.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      Michael Brown
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
                        6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-zinc-800 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122cc5aed5804ca809ca8450dcd64ebbdfd84cddcd21eeed9c724abd06576dd5?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="mt-6 font-semibold">Category</div>
                <div className="mt-2 text-2xl font-bold leading-9">
                  How to Overcome Homesickness While Studying Abroad
                </div>
                <div className="mt-2 text-base leading-6">
                  Tips for dealing with homesickness and making the most of your
                  study abroad experience.
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e65ba0232b8072c12401661d0932f02f407db3df1839588d08e76d82d741a01?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold whitespace-nowrap">
                      Jessica Wilson
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="self-stretch my-auto whitespace-nowrap">
                        11 Jan 2022
                      </div>
                      <div className="self-stretch text-lg">•</div>
                      <div className="flex-auto self-stretch my-auto">
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
      <div className="flex flex-col items-center px-20 py-12 w-full text-lg font-bold leading-7 bg-neutral-100 text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="mt-16 text-5xl text-center leading-[57.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          FAQs
        </div>
        <div className="mt-6 text-center max-md:max-w-full">
          Find quick answers to common queries about studying abroad.
        </div>
        <div className="mt-20 max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px] max-md:mt-10" />
        <div className="flex gap-3 py-5 max-w-full w-[768px] max-md:flex-wrap">
          <div className="grow self-start mt-1 max-md:max-w-full">
            What are the requirements?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4f48736e731dea046eb4387aac663aeaecbc83ae7c4f6208036ebabdbe3a70?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="w-8 aspect-square"
          />
        </div>
        <div className="max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px]" />
        <div className="flex gap-3 py-5 max-w-full w-[768px] max-md:flex-wrap">
          <div className="grow self-start mt-1 max-md:max-w-full">
            How do I apply?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4f48736e731dea046eb4387aac663aeaecbc83ae7c4f6208036ebabdbe3a70?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="w-8 aspect-square"
          />
        </div>
        <div className="max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px]" />
        <div className="flex gap-3 py-5 max-w-full w-[768px] max-md:flex-wrap">
          <div className="grow self-start mt-1 max-md:max-w-full">
            What are the costs?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4f48736e731dea046eb4387aac663aeaecbc83ae7c4f6208036ebabdbe3a70?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="w-8 aspect-square"
          />
        </div>
        <div className="max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px]" />
        <div className="flex gap-3 py-5 max-w-full w-[768px] max-md:flex-wrap">
          <div className="grow self-start mt-1 max-md:max-w-full">
            Can I work while studying?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4f48736e731dea046eb4387aac663aeaecbc83ae7c4f6208036ebabdbe3a70?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="w-8 aspect-square"
          />
        </div>
        <div className="max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px]" />
        <div className="flex gap-3 py-5 max-w-full w-[768px] max-md:flex-wrap">
          <div className="grow self-start mt-1 max-md:max-w-full">
            What support is available?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4f48736e731dea046eb4387aac663aeaecbc83ae7c4f6208036ebabdbe3a70?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="w-8 aspect-square"
          />
        </div>
        <div className="max-w-full h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] w-[768px]" />
        <div className="mt-20 text-3xl leading-10 text-center max-md:mt-10 max-md:max-w-full">
          Still have questions?
        </div>
        <div className="mt-4 text-center max-md:max-w-full">
          Contact us for further assistance.
        </div>
        <div className="justify-center px-6 py-3 mt-6 mb-10 text-base whitespace-nowrap border border-solid border-[color:var(--buttons-primary,#F90)] max-md:px-5">
          Contact
        </div>
      </div>
      <div className="flex flex-col items-center px-20 py-12 w-full bg-black bg-opacity-50 leading-[150%] text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="mt-16 text-5xl font-bold text-center leading-[58px] w-[768px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Discover the Study Abroad Experience
        </div>
        <div className="mt-6 text-lg text-center max-md:max-w-full">
          Explore our resources for valuable insights and information on
          studying abroad.
        </div>
        <div className="flex gap-4 pt-4 mt-6 mb-10 text-base whitespace-nowrap">
          <div className="grow justify-center px-6 py-3 bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] max-md:px-5">
            Sign Up
          </div>
          <div className="grow justify-center px-6 py-3 border border-solid border-[color:var(--Color-Brand-white,#FFF)] max-md:px-5">
            Contact
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c045115b694fbb7bafcc5c24e6f4bb1d8e3f3dc547cf28d178cfa261be962ef?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="my-auto aspect-[2.33] w-[63px]"
          />
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap max-md:max-w-full">
              <div className="grow whitespace-nowrap">Study Abroad</div>
              <div>Scholarships</div>
              <div className="flex-auto">University Rankings</div>
              <div className="self-stretch leading-6">Visa Information</div>
              <div className="grow whitespace-nowrap">Study Tips</div>
            </div>
            <div className="flex gap-3 justify-end pl-20 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0e3563c2380fa8fa5ab25d7e1c2337d18927f82847daa2bf6a99bfe865dba3f?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7d5eda8a0f7261f107f0b92459ddc2f1a54061fac6c83f557911968c853174?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33755d587b2a466113c1c8a399a3233b5794b55f3f161ed1fe6fcbce07d66ddf?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/488fdb92119766b2aeedec62bb0e8a0bb877a8e08d003ffb0e667feccc872136?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec281d96021fd457cb1b4712a6911c7adedc1832ba12746bd1a19e3c2c10f3c7?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-20 h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow whitespace-nowrap text-zinc-800">
            © 2023 StudyLife. All rights reserved.
          </div>
          <div className="flex gap-5 justify-between text-black">
            <div className="grow underline whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="flex-auto underline">Terms and Conditions</div>
            <div className="grow underline whitespace-nowrap">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


