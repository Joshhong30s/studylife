

export default function Home(props) {
    return (
      <div className="flex flex-col pb-12 border border-black border-solid bg-neutral-100">
        <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 border-b border-solid bg-neutral-100 border-b-[color:var(--buttons-primary,#F90)] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
            <img
              loading="lazy"
              src="/2.webp"
              className="self-stretch my-auto aspect-[2.33] w-[63px]"
            />
            <div className="flex gap-5 justify-between self-stretch my-auto text-black max-md:flex-wrap max-md:max-w-full">
              <div className="grow whitespace-nowrap">Tools</div>
              <div>Resources</div>
              <div className="flex gap-1 justify-between whitespace-nowrap">
                <div className="grow">Blogs</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd2aad79b948b86b05b54d3ef2c978b60d18412e40aaad46b83857f998ea0b2?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                  />
              </div>
              <div>About</div>
            </div>
            <div className="justify-center self-stretch px-5 py-2 whitespace-nowrap bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] text-zinc-800">
              Sign Up
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
          <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
                  <div className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Discover the Latest Insights on Studying Abroad
                  </div>
                  <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                    Immerse yourself in our blog and gain valuable information and
                    tips for studying abroad. Stay up to date with the most recent
                    posts and embark on your journey to a global education.
                  </div>
                  <div className="flex gap-4 self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
                    <div className="grow justify-center px-6 py-3 bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] max-md:px-5">
                      Learn More
                    </div>
                    <div className="grow justify-center px-6 py-3 border border-solid border-[color:var(--buttons-primary,#F90)] max-md:px-5">
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c37ae593096118d857c33cc472ae44ad44dd24fedf1e9c488fe4bae83a45?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between mt-16 leading-[150%] text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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
            <div className="justify-center self-end px-1.5 py-3 mt-24 text-base whitespace-nowrap border border-solid border-[color:var(--buttons-primary,#F90)] max-md:mt-10">
              Explore more
            </div>
          </div>
          <div className="mt-20 mb-10 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-6 text-zinc-800 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-full aspect-[1.39]"
                  />
                  <div className="flex gap-4 self-start mt-6 text-sm font-semibold">
                    <div className="justify-center px-2 py-1 whitespace-nowrap bg-sky-500 aspect-[1.79]">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ed8f5cc7b86aea32472196bfeee8046f908a22ff59100cc5a47b09daa9c92?apiKey=074c83f0827040edbff71f710b0abb50&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base leading-6 text-zinc-800 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-full aspect-[1.39]"
                  />
                  <div className="flex gap-4 self-start mt-6 text-sm font-semibold whitespace-nowrap">
                    <div className="grow justify-center px-2 py-1 bg-sky-500">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ed8f5cc7b86aea32472196bfeee8046f908a22ff59100cc5a47b09daa9c92?apiKey=074c83f0827040edbff71f710b0abb50&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base leading-6 text-zinc-800 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=074c83f0827040edbff71f710b0abb50&"
                    className="w-full aspect-[1.39]"
                  />
                  <div className="flex gap-4 self-start mt-6 text-sm font-semibold">
                    <div className="justify-center px-2 py-1 whitespace-nowrap bg-sky-500 aspect-[1.52]">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ed8f5cc7b86aea32472196bfeee8046f908a22ff59100cc5a47b09daa9c92?apiKey=074c83f0827040edbff71f710b0abb50&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
          <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto leading-[150%] max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-bold leading-[58px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Stay Informed with StudyLife Newsletter
                  </div>
                  <div className="mt-6 text-lg text-zinc-800 max-md:max-w-full">
                    Get updates on new blog posts, tools, and study abroad
                    resources.
                  </div>
                  <div className="flex gap-4 justify-between mt-8 text-base max-md:flex-wrap max-md:max-w-full">
                    <div className="grow justify-center p-3 border border-solid bg-neutral-100 border-[color:var(--buttons-primary,#F90)] text-stone-500 max-md:max-w-full">
                      Enter your email
                    </div>
                    <div className="justify-center px-6 py-3 whitespace-nowrap bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] text-zinc-800 max-md:px-5">
                      Sign up
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-zinc-800 max-md:max-w-full">
                    By signing up, you confirm that you agree with our Terms and
                    Conditions.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e29638f4177fa51c6521027561d40fe341f97b901f913fd896f6157bd62a41e0?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/651243b504dd443451c779ed290b50be0a4e631f1140a6e120b68a2787b8af98?apiKey=074c83f0827040edbff71f710b0abb50&"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9954d5d10f1ca36b568eff04f785f83892ee41bd7e2e089ffb20dd279b6882be?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf627bd768ca95fdf1350ed6b4f2b3dd233caa496a331ee0072be80f6355193a?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aaaf9659bb6a009261859801509b2df471bfc553269a46bfce47b7533478212?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5dc50c3e061c6392d7d971c7766ddeca3fa9539cdfcbce6bd8b8b589eb20d1b?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d3069fe689ee2835e69b59adaecf4e955452821c5356e3e8481020158cbf26a?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-20 h-px bg-amber-500 border border-solid border-[color:var(--buttons-primary,#F90)] max-md:mt-10 max-md:max-w-full" />
          <div className="flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
            <div className="grow whitespace-nowrap text-zinc-800">
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
  
  
  