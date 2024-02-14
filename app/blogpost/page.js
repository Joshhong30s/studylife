

export default function blogPost(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 bg-white border-b border-solid border-b-[color:var(--Border-primary,#000)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/680eb1260a30fae292bc078fe0520b859c84b7d1701fbc5df8caed2614a9b030?apiKey=074c83f0827040edbff71f710b0abb50&"
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
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 self-start mt-16 ml-72 text-base leading-6 text-center text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
          <div className="grow">Study</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8fabcf74cf76e729bee7ca9040224012e6f18455f62f89da3464a7418dd1eb?apiKey=074c83f0827040edbff71f710b0abb50&"
            className="my-auto w-4 aspect-square"
          />
          <div className="grow">Experience</div>
        </div>
        <div className="self-center mt-6 text-5xl font-bold text-black leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          10 Tips for Successful Study Abroad
        </div>
        <div className="flex gap-5 justify-between self-center mt-12 max-w-full w-[768px] max-md:flex-wrap max-md:mt-10">
          <div className="flex gap-4 justify-between text-sm leading-5 text-black whitespace-nowrap">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5fd4588dd53cc190eeec3f38350708a0fecbb27d451bc600377f057aa4ae8b?apiKey=074c83f0827040edbff71f710b0abb50&"
              className="w-14 aspect-square"
            />
            <div className="flex flex-col flex-1 my-auto">
              <div className="font-semibold">John Doe</div>
              <div className="flex gap-2 items-center mt-1">
                <div className="grow self-stretch my-auto">
                  January 11, 2022
                </div>
                <div className="self-stretch text-lg">•</div>
                <div className="grow self-stretch my-auto">5 minute read</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 my-auto">
            <div className="flex justify-center items-center px-1 w-8 h-8 aspect-square bg-zinc-100 rounded-[64px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de8e62f9d23f2351c3afcbed9f2fbe883084c48d0ad8f547d08f43eec27182e?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex justify-center items-center px-1 w-8 h-8 aspect-square bg-zinc-100 rounded-[64px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/488fdb92119766b2aeedec62bb0e8a0bb877a8e08d003ffb0e667feccc872136?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex justify-center items-center px-1 w-8 h-8 aspect-square bg-zinc-100 rounded-[64px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33755d587b2a466113c1c8a399a3233b5794b55f3f161ed1fe6fcbce07d66ddf?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex justify-center items-center px-1 w-8 h-8 aspect-square bg-zinc-100 rounded-[64px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0e3563c2380fa8fa5ab25d7e1c2337d18927f82847daa2bf6a99bfe865dba3f?apiKey=074c83f0827040edbff71f710b0abb50&"
                className="w-full aspect-square"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfd19d53396353093cd9b3357c6c7dfea9268120b1414c4276245013a88bfdd?apiKey=074c83f0827040edbff71f710b0abb50&"
          className="mt-20 mb-10 w-full aspect-[2.17] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-10 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-6 text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-bold leading-10 max-md:max-w-full">
                  Introduction
                </div>
                <div className="mt-6 max-md:max-w-full">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </div>
                <div className="mt-4 max-md:max-w-full">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c994d718334fd93087ce82a39be2fedee0e726a970ab6f33ebc4455fac8b4278?apiKey=074c83f0827040edbff71f710b0abb50&"
                  className="mt-16 w-full aspect-[1.92] max-md:mt-10 max-md:max-w-full"
                />
                <div className="flex gap-2 justify-between mt-4 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="w-0.5 bg-black h-[21px]" />
                  <div className="grow max-md:max-w-full">
                    Image caption goes here
                  </div>
                </div>
                <div className="mt-16 text-xl font-bold leading-7 max-md:mt-10 max-md:max-w-full">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </div>
                <div className="mt-4 max-md:max-w-full">
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                  imperdiet commodo consectetur convallis risus. Sed condimentum
                  enim dignissim adipiscing faucibus consequat, urna. Viverra
                  purus et erat auctor aliquam. Risus, volutpat vulputate
                  posuere purus sit congue convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris, neque ultricies eu
                  vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.
                </div>
                <div className="flex gap-5 justify-between mt-14 text-xl leading-7 bg-white bg-opacity-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="w-0.5 bg-black h-[84px]" />
                  <div className="flex-auto italic max-md:max-w-full">
                    &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida
                    ac enim mauris id. Non pellentesque congue eget consectetur
                    turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                    tincidunt aenean tempus.&quot;
                  </div>
                </div>
                <div className="mt-9 max-md:max-w-full">
                  Tristique odio senectus nam posuere ornare leo metus,
                  ultricies. Blandit duis ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                  pellentesque suscipit accumsan. Cursus viverra aenean magna
                  risus elementum faucibus molestie pellentesque. Arcu ultricies
                  sed mauris vestibulum.
                </div>
                <div className="mt-10 text-3xl font-bold leading-10 max-md:max-w-full">
                  Conclusion
                </div>
                <div className="mt-5 max-md:max-w-full">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </div>
                <div className="mt-4 max-md:max-w-full">
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                  condimentum mi massa. In tincidunt pharetra consectetur sed
                  duis facilisis metus. Etiam egestas in nec sed et. Quis
                  lobortis at sit dictum eget nibh tortor commodo cursus.
                </div>
                <div className="mt-4 max-md:max-w-full">
                  Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                  aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                  Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                  consectetur dictum. Donec posuere pharetra odio consequat
                  scelerisque et, nunc tortor.Nulla adipiscing erat a erat.
                  Condimentum lorem posuere gravida enim posuere cursus diam.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-8 w-full text-base leading-6 border border-solid border-[color:var(--Border-primary,#000)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-xl font-bold leading-7 text-black whitespace-nowrap">
                  Subscribe to
                </div>
                <div className="mt-4 text-black whitespace-nowrap">
                  receive the latest blog posts to your inbox every week.
                </div>
                <div className="justify-center px-3 py-2.5 mt-4 whitespace-nowrap bg-white border border-solid border-[color:var(--Color-Brand-black,#000)] text-stone-500">
                  Enter your email
                </div>
                <div className="justify-center items-center px-16 py-2 mt-4 text-white whitespace-nowrap bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
                  Subscribe
                </div>
                <div className="flex gap-1 justify-between mt-4 text-xs">
                  <div className="grow text-black whitespace-nowrap">
                    By subscribing, you agree to our Privacy Policy.
                  </div>
                  <div className="flex-auto text-black">Privacy Policy.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bffd4b86ec89c5a002dc62713ed7eb24cb5bb71214a045ae525710d7a3cdbe90?apiKey=074c83f0827040edbff71f710b0abb50&"
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
        <div className="shrink-0 mt-20 h-px bg-black border border-solid border-[color:var(--Border-primary,#000)] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between self-center mt-8 mb-8 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow text-black whitespace-nowrap">
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


