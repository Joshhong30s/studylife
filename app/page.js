

export default function Home(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 bg-white border-b border-solid border-b-[color:var(--Border-primary,#000)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bf40071a0e1afe784a46b49ad5f02a693f4d1cf331302afcca6a3f65cc7cb31?apiKey=074c83f0827040edbff71f710b0abb50&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?apiKey=074c83f0827040edbff71f710b0abb50&"
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
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold text-black leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Discover the Latest Insights on Studying Abroad
                </div>
                <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                  Immerse yourself in our blog and gain valuable information and
                  tips for studying abroad. Stay up to date with the most recent
                  posts and embark on your journey to a global education.
                </div>
                <div className="flex gap-4 self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
                  <div className="grow justify-center px-6 py-3 text-white bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
                    Learn More
                  </div>
                  <div className="grow justify-center px-6 py-3 text-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9aecf2a2474172e0e9bcfadf2d2da3144fe06a7f015bafa3b52113e75e4a7cb?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-16 text-black leading-[150%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-base font-semibold max-md:max-w-full">
              Informative
            </div>
            <div className="mt-4 text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
              Discover the World
            </div>
            <div className="mt-6 text-lg max-md:max-w-full">
              Get insights and tips for studying abroad
            </div>
          </div>
          <div className="justify-center self-end px-1.5 py-3 mt-24 text-base whitespace-nowrap border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:mt-10">
            Explore more
          </div>
        </div>
        <div className="mt-20 mb-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 text-black max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="flex gap-4 self-start mt-6 text-sm font-semibold">
                  <div className="justify-center px-2 py-1 whitespace-nowrap aspect-[1.79] bg-zinc-100">
                    Study
                  </div>
                  <div className="my-auto">5 min read</div>
                </div>
                <div className="mt-4 text-2xl font-bold leading-8 whitespace-nowrap">
                  Experience the World Through Study
                </div>
                <div className="mt-2 leading-6">
                  Discover the benefits of studying abroad and expand your
                  horizons
                </div>
                <div className="flex gap-2 justify-center self-start mt-6 whitespace-nowrap">
                  <div className="grow">Read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df4a3c4a96fbd068e87c9bc943325dde32c7e6d059eb39278a15e2b68dd0f382?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="flex gap-4 self-start mt-6 text-sm font-semibold whitespace-nowrap">
                  <div className="grow justify-center px-2 py-1 bg-zinc-100">
                    Experience
                  </div>
                  <div className="grow my-auto">5 min read</div>
                </div>
                <div className="mt-4 text-2xl font-bold leading-9">
                  Tips for a Successful Study Abroad Journey
                </div>
                <div className="mt-2 leading-6">
                  Learn how to make the most out of your study abroad experience
                </div>
                <div className="flex gap-2 justify-center self-start mt-6 whitespace-nowrap">
                  <div className="grow">Read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df4a3c4a96fbd068e87c9bc943325dde32c7e6d059eb39278a15e2b68dd0f382?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f197c92450d9d5c80145b7c29390389d1d6c365fe4670457f6a2e7bd6a9e15c?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-full aspect-[1.39]"
                />
                <div className="flex gap-4 self-start mt-6 text-sm font-semibold">
                  <div className="justify-center px-2 py-1 whitespace-nowrap aspect-[1.52] bg-zinc-100">
                    Tips
                  </div>
                  <div className="my-auto">5 min read</div>
                </div>
                <div className="mt-4 text-2xl font-bold leading-9">
                  Navigating Cultural Differences While Studying Abroad
                </div>
                <div className="mt-2 leading-6">
                  Discover strategies for adapting to a new culture and making
                  connections
                </div>
                <div className="flex gap-2 justify-center self-start mt-6 whitespace-nowrap">
                  <div className="grow">Read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df4a3c4a96fbd068e87c9bc943325dde32c7e6d059eb39278a15e2b68dd0f382?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Stay Informed with StudyLife Newsletter
                </div>
                <div className="mt-6 text-lg text-black max-md:max-w-full">
                  Get updates on new blog posts, tools, and study abroad
                  resources.
                </div>
                <div className="flex gap-4 justify-between mt-8 text-base max-md:flex-wrap max-md:max-w-full">
                  <div className="grow justify-center p-3 bg-white border border-solid border-[color:var(--Color-Brand-black,#000)] text-stone-500 max-md:max-w-full">
                    Enter your email
                  </div>
                  <div className="justify-center px-6 py-3 text-white whitespace-nowrap bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
                    Sign up
                  </div>
                </div>
                <div className="mt-4 text-xs text-black max-md:max-w-full">
                  By signing up, you confirm that you agree with our Terms and
                  Conditions.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec0bb87242e51a9611baedfcb28e0462daa7f59712f0bb6ead50e94881f5ba4f?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/261996a3eb4d2a57dd7f420f364b1d6eaa170c747bc10c937f9ee4846f797149?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="aspect-[2.33] w-[63px]"
          />
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between text-base font-semibold leading-6 text-black max-md:flex-wrap max-md:max-w-full">
              <div className="grow whitespace-nowrap">Link One</div>
              <div>Link Two</div>
              <div>Link Three</div>
              <div>Link Four</div>
              <div className="grow whitespace-nowrap">Link Five</div>
            </div>
            <div className="flex gap-3 justify-end pl-20">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/31013d06cddb55c39df4cdeb33b6b48c6fbc05737dd27767b800efb73ded2caf?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b655208516b295f93fcc599db21496c8573bd1c8064220879cf53d9462f3bc8?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1332e40c061482067062bfab80c125f3ae26fa5c3731b55424bf3b58522d3e0?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ec53ece447b3ae9f6e9f06db93c5ac976c08b25cd66b0b4bed7aa0afb5c6f0?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a5df4d4b30cfea0ddffb3900c9470a92a36e15ce8e2079d406b11154290e64?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-20 h-px bg-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-black whitespace-nowrap">
            © 2023 Relume. All rights reserved.
          </div>
          <div className="flex gap-5 justify-between text-black">
            <div className="grow underline whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="underline">Terms of Service</div>
            <div className="grow underline whitespace-nowrap">
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


