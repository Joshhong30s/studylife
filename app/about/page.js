

export default function About(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 bg-white border-b border-solid border-b-[color:var(--Border-primary,#000)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b46e8ae89fdb541ffead27acd77e25af335e562439f5a67c50085eb02b3874?apiKey=074c83f0827040edbff71f710b0abb50&"
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
          <div className="justify-center self-stretch px-5 py-2 text-white whitespace-nowrap bg-black border border-solid border-[color:var(--Color-Brand-black,#000)]">
            Sign Up
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <div className="font-semibold text-center max-md:max-w-full">
                  Informative
                </div>
                <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Empowering Students Through Study Abroad Experience
                </div>
                <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                  StudyLife is a platform dedicated to providing valuable
                  information and resources to students interested in studying
                  abroad. Our mission is to empower students with the knowledge
                  and tools they need to make informed decisions and have a
                  successful study abroad experience. Founded by an experienced
                  consultant, StudyLife is committed to helping students achieve
                  their academic and personal goals while exploring new cultures
                  and expanding their horizons.
                </div>
                <div className="flex gap-5 justify-between self-start pt-4 mt-6 whitespace-nowrap">
                  <div className="grow justify-center px-6 py-3 border border-solid border-[color:var(--Color-Neutral-black,#000)] max-md:px-5">
                    Learn More
                  </div>
                  <div className="flex gap-2 justify-center self-start mt-3">
                    <div className="grow">Contact</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e9356e0dcf855264fc877fd72a0d1fd89a2662dcaa4dddc74930059b224a520?apiKey=074c83f0827040edbff71f710b0abb50&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2d75f074c70ce45cb1c3694f10ca05c0850b35ac1c5c1e6abb5923b5d307dd?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-2 text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <div className="font-semibold text-center max-md:max-w-full">
                  Get in touch
                </div>
                <div className="mt-4 text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                  Contact us
                </div>
                <div className="mt-6 text-lg max-md:max-w-full">
                  Have a question? Need assistance? We're here to help!
                </div>{" "}
                <div className="flex gap-4 self-start mt-10 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/58cb31df6a691daf36afc5f95a0496f43cbf1bcc841ccc7e91b67a44d299001d?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto">hello@studylife.com</div>
                </div>{" "}
                <div className="flex gap-4 self-start mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ef834e698f7c239c836e701da3bb25e9f5dd9bced2c3e4c74f6a6ede25b720?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto">+1 (555) 123-4567</div>
                </div>{" "}
                <div className="flex gap-4 self-start mt-4 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d39ceebe84a31cb3152491b3f22608ac7c7fc6e104d1f11ba636f455e10ec0?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />{" "}
                  <div className="grow">123 Main St, Anytown, USA</div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <div>First name</div>{" "}
                    <div className="shrink-0 mt-2 h-12 bg-white border border-solid border-[color:var(--Color-Brand-black,#000)]" />
                  </div>{" "}
                  <div className="flex flex-col flex-1">
                    <div>Last name</div>{" "}
                    <div className="shrink-0 mt-2 h-12 bg-white border border-solid border-[color:var(--Color-Brand-black,#000)]" />
                  </div>
                </div>{" "}
                <div className="flex gap-5 justify-between mt-6 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <div>Email</div>{" "}
                    <div className="shrink-0 mt-2 h-12 bg-white border border-solid border-[color:var(--Color-Brand-black,#000)]" />
                  </div>{" "}
                  <div className="flex flex-col flex-1">
                    <div>Phone number</div>{" "}
                    <div className="shrink-0 mt-2 h-12 bg-white border border-solid border-[color:var(--Color-Brand-black,#000)]" />
                  </div>
                </div>{" "}
                <div className="mt-6 text-base leading-6 text-black max-md:max-w-full">
                  Choose a topic
                </div>{" "}
                <div className="flex gap-4 justify-between p-3 mt-2 text-base leading-6 bg-white border border-solid border-[color:var(--Border-primary,#000)] text-stone-500 max-md:flex-wrap max-md:max-w-full">
                  <div className="grow max-md:max-w-full">Select one...</div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df6806b16f37d73fc79c93e1c683324644a9021f0bb540c38c104be40c5d98a6?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />
                </div>{" "}
                <div className="mt-10 text-base leading-6 text-black max-md:max-w-full">
                  Which best describes you?
                </div>{" "}
                <div className="mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-6">
                        <div className="flex gap-3 justify-between">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">First choice</div>
                        </div>{" "}
                        <div className="flex gap-3 justify-between mt-3.5">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">Third choice</div>
                        </div>{" "}
                        <div className="flex gap-3 justify-between mt-3.5">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">Fifth choice</div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-6">
                        <div className="flex gap-3 justify-between">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">Second choice</div>
                        </div>{" "}
                        <div className="flex gap-3 justify-between mt-3.5">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">Fourth choice</div>
                        </div>{" "}
                        <div className="flex gap-3 justify-between mt-3.5 whitespace-nowrap">
                          <div className="my-auto bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] rounded-[100px] w-[18px]" />{" "}
                          <div className="flex-auto">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-10 text-base leading-6 text-black max-md:max-w-full">
                  Message
                </div>{" "}
                <div className="px-3 pt-3 pb-28 mt-2 text-base leading-6 bg-white border border-solid border-[color:var(--Border-primary,#000)] text-stone-500 max-md:pb-10 max-md:max-w-full">
                  Type your message...
                </div>{" "}
                <div className="flex gap-2 self-start pb-4 mt-6 text-sm leading-5 text-black whitespace-nowrap">
                  <div className="self-start bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] w-[18px]" />{" "}
                  <div className="grow">I accept the Terms</div>
                </div>{" "}
                <div className="justify-center self-start px-6 py-3 mt-6 text-base leading-6 text-white whitespace-nowrap bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c62c6a1f362a4aee1fe80e02d390d71fa60e2a2a9aa7c7a28d392dfeaa61c6?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="my-auto aspect-[2.33] w-[63px]"
          />{" "}
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap max-md:max-w-full">
              <div className="grow whitespace-nowrap">Study Abroad</div>{" "}
              <div>Scholarships</div>{" "}
              <div className="flex-auto">University Rankings</div>{" "}
              <div className="self-stretch leading-6">Visa Information</div>{" "}
              <div className="grow whitespace-nowrap">Study Tips</div>
            </div>{" "}
            <div className="flex gap-3 justify-end pl-20 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0e3563c2380fa8fa5ab25d7e1c2337d18927f82847daa2bf6a99bfe865dba3f?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7d5eda8a0f7261f107f0b92459ddc2f1a54061fac6c83f557911968c853174?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33755d587b2a466113c1c8a399a3233b5794b55f3f161ed1fe6fcbce07d66ddf?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/488fdb92119766b2aeedec62bb0e8a0bb877a8e08d003ffb0e667feccc872136?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec281d96021fd457cb1b4712a6911c7adedc1832ba12746bd1a19e3c2c10f3c7?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>{" "}
        <div className="shrink-0 mt-20 h-px bg-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-10 max-md:max-w-full" />{" "}
        <div className="flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-black whitespace-nowrap">
            © 2023 StudyLife. All rights reserved.
          </div>{" "}
          <div className="flex gap-5 justify-between text-black">
            <div className="grow underline whitespace-nowrap">
              Privacy Policy
            </div>{" "}
            <div className="flex-auto underline">Terms and Conditions</div>{" "}
            <div className="grow underline whitespace-nowrap">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

