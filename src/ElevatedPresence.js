import React, { useState } from 'react';

function ElevatedPresence(props) {
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    setContactClicked(true);
  }
  return (
    <>
    {/* This is the starting of the web page. Containing the Header/Navbar */}
      <header className="relative overflow-hidden bg-gradient-to-b from-purple-200 to-white"> 
      <div className="relative flex w-full flex-col px-20 py-10 max-md:max-w-full max-md:px-5">
        <div
          className="self-stretch flex items-stretch justify-between gap-5 ml-3 mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
          role="navigation"
          aria-label="Site navigation"
        >
          <div className="text-gray-700 text-center text-2xl font-bold tracking-tight self-center my-auto">
            UniCraft
          </div>
          <div className="justify-between items-stretch self-center flex gap-5 my-auto max-md:justify-center">
            <a
              href="#howitworks"
              className="text-gray-700 text-lg font-bold tracking-tight"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 text-lg font-bold tracking-tight"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-700 text-lg font-bold tracking-tight"
            >
              FAQ
            </a>
          </div>
          <button
            type="button"
            className="bg-gray-800 text-gray-50 text-lg font-bold tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--color-gray-600,#4B5563)] shadow-sm px-8 py-3.5 rounded-lg border-solid max-md:px-5"
            aria-label="Contact Us"
            onClick={handleContactClick}
          >
            {contactClicked ? 'Contacted' : 'Contact us'}
          </button>
        </div>

        <h1 className="text-gray-800 text-center text-7xl font-black leading-[85px] tracking-tighter self-center w-[1101px] mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-gray-600 text-center text-xl font-medium self-center mt-6 max-md:max-w-full">
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success.
        </p>
        <a className="text-gray-50 text-xl font-bold tracking-tight whitespace-nowrap justify-center items-stretch shadow-sm bg-gray-800 self-center mt-8 px-12 py-4 rounded-lg max-md:px-5"
          href="#pricing"
        >
          View Pricing
        </a>
      </div>
    </header>
      <div className="text-gray-400 text-center text-sm font-medium tracking-tight self-center whitespace-nowrap mt-10 max-md:mt-10">
        Trusted By 250+ Companies
      </div>
      <div className="items-stretch self-center flex items-center justify-center max-w-full gap-5 pl-11 pr-8 py-4 max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/t_zapier2402.jpg"
          className="aspect-[2.03] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/spotify5871.logowik.com.webp"
          className="aspect-[2.92] object-contain object-center w-[105px] h-[110px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/zoom-communications3884.logowik.com.webp"
          className="aspect-[2.06] object-contain object-center w-[74px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/slack-technologies2176.logowik.com.webp"
          className="aspect-[2.53] object-contain object-center w-[91px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/amazon-black3184.jpg"
          className="aspect-[2.31] object-contain object-center w-[83px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/adobe-black8153.jpg"
          className="aspect-[2.78] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
          alt=""
        />
      </div>


{/* Below contains the second section of viewing previous work. */}
      <header className="flex flex-col items-stretch">
        <div className="flex w-full items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div class="grid grid-cols-3 gap-4">
            <img
              loading="lazy"
              srcSet="https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="w-full h-full object-cover rounded-lg"
            />
            <img
              loading="lazy"
              srcSet="https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="w-full h-full object-cover rounded-lg"
            />
            <img
              loading="lazy"
              srcSet="https://images.pexels.com/photos/13260076/pexels-photo-13260076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="w-full h-full object-cover rounded-lg"
            />
        </div>          
      </div>
        <a
          href="#"
          className="text-gray-600 text-xl font-bold tracking-tight whitespace-nowrap justify-center items-stretch border border-gray-600 shadow-sm self-center mt-16 px-14 py-5 rounded-lg border-solid max-md:mt-10 max-md:px-5"
        >
          View recent work
        </a>
        
        
        {/* The THIRD SECTION about "HOW IT WORKS" */}
        <div id='howitworks' className="border-gray-200 shadow-2xl bg-white self-center flex w-full max-w-[1260px] flex-col items-stretch mt-20 px-10 py-12 rounded-3xl border-0.916px border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-gray-800 text-center text-5xl font-bold leading-[60px] tracking-tighter self-center whitespace-nowrap mt-3.5 max-md:text-4xl">
            How it works
          </div>
          <div className="text-gray-600 text-center text-xl font-medium self-center mt-6 max-md:max-w-full">
            Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
          </div>
          <div className="mt-25 mb-10 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              {/* SUBSCRIPTION */}
              <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">              
                <div className="items-stretch flex grow flex-col mt-6 max-md:mt-10">
                <h1 className="bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-bold text-5xl md:text-5xl lg:text-9xl text-center">1</h1>  
                 <div className="text-gray-800 text-center text-4xl font-black tracking-tighter whitespace-nowrap">
                    <label htmlFor="subscribe-input">Subscribe</label>
                 </div>
                 <div className="text-gray-500 text-center text-lg font-medium tracking-tight mt-1">
                    Subscribe to a plan & you’ll get an instant access to your private Slack channel.
                 </div>
                </div>
              </div>
              <img src="https://img.icons8.com/?size=60&id=60671&format=png"
                class="w-8 h-8 mt-20 justify-between hidden lg:block"></img>
              {/* REQUEST */}
              <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col mt-6 max-md:mt-10">
                <h1 className="bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-bold text-5xl md:text-5xl lg:text-9xl text-center">2</h1>
                 <div className="text-gray-800 text-center text-4xl font-black tracking-tighter whitespace-nowrap">
                    <label htmlFor="subscribe-input">Request</label>
                 </div>
                 <div className="text-gray-500 text-center text-lg font-medium tracking-tight mt-1">
                 Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates
                 every 24-48 hours
                 </div>
                </div>
              </div>
              <img src="https://img.icons8.com/?size=60&id=60671&format=png"
                class="w-8 h-8 mt-20 justify-between hidden lg:block">
              </img>
              {/* REVISE */}
              <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">                
                <div className="items-stretch flex flex-col mt-4 max-md:mt-10">
                
                <h1 className="bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent font-bold text-5xl md:text-5xl lg:text-9xl text-center">3</h1>
                 <div className="text-gray-800 text-center text-4xl font-black tracking-tighter whitespace-nowrap">
                    <label htmlFor="revise-input">Revise</label>
                 </div>
                 <div className="text-gray-500 text-center text-lg font-medium tracking-tight mt-1">
                    Need changes? We guarantee unlimited revisions until you're 200% satisfied.
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Small section of client reveiws, have made some minor changes to profile pictures, company image, etc. */}
      <div className="items-center flex w-full flex-col mt-30 px-20 py-12 max-md:max-w-full mb-20 max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          src="https://logowik.com/content/uploads/images/toblerone2956.jpg"
          className="aspect-[3.5] object-contain object-center w-[140px] h-[140px] justify-center overflow-hidden max-w-full mt-0 max-md:mt-10"
        />
        <div className="self-stretch text-gray-800 text-center text-5xl font-bold leading-[60px] tracking-tighter w-full mt-2 mx-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
          We’ve been with unicraft to kick start every new project and can’t imagine working without it.
        </div>
        <img
          loading="lazy"
          srcSet="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg"  className="aspect-square rounded-full object-contain object-center w-16 justify-center items-center overflow-hidden max-w-full mt-10"
        />
        <div className="self-stretch text-gray-900 text-center text-lg font-medium leading-7 tracking-tight mt-4 mx-2.5 max-md:max-w-full">
          Candice Wu
        </div>
        <div className="self-stretch text-gray-500 text-center text-base leading-6 tracking-tight mt-1 mb-12 mx-2.5 max-md:max-w-full max-md:mb-10">
          Product Manager, Toblerone
        </div>
      </div>
      <br></br>
      {/* PRICING SECTION. Have used different icons for simplicity and maintained the overall structure of the webpage. */}
      <div id='pricing' className="flex flex-col items-stretch px-5">
      <div className="text-gray-800 text-center text-6xl font-bold tracking-tighter self-center max-md:max-w-full max-md:text-4xl">
        Pricing made for collaborative support.
      </div>
      <div className="text-gray-500 text-center text-xl font-medium self-center max-w-[685px] mt-5 max-md:max-w-full">
        Plain is made for your entire company. Only pay for users that actually
        message customers. Everyone else is free, forever.
      </div>
      <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch border border-[color:var(--color-gray-200,#E5E7EB)] bg-white flex w-full grow flex-col mx-auto px-6 py-10 rounded-2xl border-solid max-md:mt-6 max-md:px-5">
              <div className="text-zinc-900 text-2xl font-bold tracking-tight whitespace-nowrap">
                Freebie
              </div>
              <div className="text-gray-500 text-base font-medium tracking-tight mt-3">
                Ideal for individuals who need quick access to basic features.
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-gray-800 text-6xl font-medium tracking-tighter max-md:text-4xl">
                  $0
                </div>
                <div className="text-gray-600 text-base my-auto">/ Month</div>
              </div>
              <button className="text-gray-600 text-center text-base font-medium whitespace-nowrap justify-center items-center border border-[color:var(--color-gray-600,#4B5563)] mt-6 px-16 py-3 rounded-lg border-solid max-md:px-5">
                Get Started Now
              </button>
              
              <div className="flex justify-between gap-2 mt-10 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">                
                20,000+ of PNG & SVG graphics
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
                <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Access to 100 million stock images
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Upload custom icons and fonts
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Unlimited Sharing
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Upload graphics & video in up to 4k
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Unlimited Projects
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Instant Access to our design system
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Create teams to collaborate on designs
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch shadow-lg bg-gray-800 flex w-full grow flex-col mx-auto px-6 py-10 rounded-xl max-md:mt-6 max-md:px-5">
              <div className="text-white text-2xl font-bold tracking-tight whitespace-nowrap">
                Professional
              </div>
              <div className="overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap text-base font-medium tracking-tight mt-3">
                Ideal for individuals who who need advanced features and tools
                for client work.
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-gray-50 text-6xl font-medium tracking-tighter max-md:text-4xl">
                  $25
                </div>
                <div className="text-gray-50 text-base my-auto">/ Month</div>
              </div>
              <button className="text-gray-800 text-center text-base font-bold whitespace-nowrap justify-center items-center bg-gray-50 mt-6 px-16 py-3 rounded-lg max-md:px-5">
                Get Started Now
              </button>
              <div className="flex justify-between gap-2 mt-10 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/checkmark--v1.png" alt="checkmark--v1"/>


                <div className="text-gray-50 text-base font-medium self-stretch grow whitespace-nowrap">
                  20,000+ of PNG & SVG graphics
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/checkmark--v1.png" alt="checkmark--v1"/>


                <div className="text-gray-50 text-base font-medium self-stretch grow whitespace-nowrap">
                  Access to 100 million stock images
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/checkmark--v1.png" alt="checkmark--v1"/>


                <div className="text-gray-50 text-base font-medium self-stretch grow whitespace-nowrap">
                  Upload custom icons and fonts
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/checkmark--v1.png" alt="checkmark--v1"/>


                <div className="text-gray-50 text-base font-medium self-stretch grow whitespace-nowrap">
                  Unlimited Sharing
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/checkmark--v1.png" alt="checkmark--v1"/>


                <div className="text-gray-50 text-base font-medium self-stretch grow whitespace-nowrap">
                  Upload graphics & video in up to 4k
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/737373/checkmark--v1.png" alt="checkmark--v1"/>

                <div className="text-gray-400 text-base font-medium self-stretch grow whitespace-nowrap">
                  Unlimited Projects
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/737373/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium self-stretch grow whitespace-nowrap">
                  Instant Access to our design system
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/737373/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-400 text-base font-medium self-stretch grow whitespace-nowrap">
                  Create teams to collaborate on designs
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch border border-[color:var(--color-gray-200,#E5E7EB)] bg-white flex w-full grow flex-col mx-auto px-6 py-10 rounded-2xl border-solid max-md:mt-6 max-md:px-5">
              <div className="text-zinc-900 text-2xl font-bold tracking-tight whitespace-nowrap">
                Enterprise
              </div>
              <div className="overflow-hidden text-gray-500 text-ellipsis whitespace-nowrap text-base font-medium tracking-tight mt-3">
                Ideal for businesses who need personalized services and security
                for large teams.{" "}
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-gray-800 text-6xl font-medium tracking-tighter max-md:text-4xl">
                  $100
                </div>
                <div className="text-gray-600 text-base self-center my-auto">
                  / Month
                </div>
              </div>
              <button className="text-gray-600 text-center text-base font-medium whitespace-nowrap justify-center items-center border-[color:var(--color-gray-600,#4B5563)] mt-6 px-16 py-3 rounded-lg border-[1.5px] border-solid max-md:px-5">
                Get Started Now
              </button>
              <div className="flex justify-between gap-2 mt-10 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  20,000+ of PNG & SVG graphics
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Access to 100 million stock images
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Upload custom icons and fonts
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Unlimited Sharing
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Upload graphics & video in up to 4k
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Unlimited Projects
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Instant Access to our design system
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-3 items-start">
              <img loading="lazy" width="24" height="24" src="https://img.icons8.com/material-rounded/24/checkmark--v1.png" alt="checkmark--v1"/>
                <div className="text-gray-800 text-base font-medium tracking-tight self-stretch grow whitespace-nowrap">
                  Create teams to collaborate on designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div id='faq' className="flex flex-col pb-8 px-5 mt-10">
      <div className="self-center text-gray-900 text-center text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
        Frequently asked questions
      </div>
      <div className="self-center text-gray-500 text-center text-xl font-medium mt-2 max-md:max-w-full">
        Everything you need to know about the product and billing.
      </div>
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
        <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-gray-800 text-xl font-medium max-md:max-w-full">
            Is there a free trial available?
          </div>
          <div className="text-gray-500 text-base font-medium mt-3.5 max-md:max-w-full">
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </div>
        </div>
        <button
          loading="lazy" width="24" height="24" alt="checkmark--v1" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
        </button>
      </div>
      <div className="self-center bg-gray-200 flex w-[768px] shrink-0 max-w-full h-px flex-col mt-8" />
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
        <div className="text-gray-800 text-xl font-medium grow max-md:max-w-full">
          Can I change my plan later?
        </div>
        <button
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/>
        </button>
      </div>
      <div className="self-center bg-gray-200 flex w-[768px] shrink-0 max-w-full h-px flex-col mt-8" />
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
        <div className="text-gray-800 text-xl font-medium grow max-md:max-w-full">
          What is your cancellation policy?
        </div>
        <button
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/>
        </button>
      </div>
      <div className="self-center bg-gray-200 flex w-[768px] shrink-0 max-w-full h-px flex-col mt-8" />
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
        <div className="text-gray-800 text-xl font-medium grow max-md:max-w-full">
          Can other info be added to an invoice?
        </div>
        <button
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/>
        </button>
      </div>
      <div className="self-center bg-gray-200 flex w-[768px] shrink-0 max-w-full h-px flex-col mt-8" />
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
        <div className="text-gray-800 text-xl font-medium grow max-md:max-w-full">
          How does billing work?
        </div>
        <button
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/>
        </button>
      </div>
      <div className="self-center bg-gray-200 flex w-[768px] shrink-0 max-w-full h-px flex-col mt-8" />
      <div className="items-stretch self-center flex w-[768px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
        <div className="text-gray-800 text-xl font-medium grow max-md:max-w-full">
          How do I change my account email?
        </div>
        <button
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/>
        </button>
      </div>
      <div className="self-stretch text-gray-900 text-center text-7xl font-black tracking-tighter w-full mt-60 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        No long-term contracts.
        <br />
        No catches. Simple.
      </div>
      <div className="self-stretch text-gray-500 text-center text-xl font-medium w-full mt-4 max-md:max-w-full">
        Start your 30-day free trial. Cancel anytime.
      </div>
      <button className="text-gray-50 text-xl font-bold tracking-tight whitespace-nowrap justify-center items-stretch shadow-sm bg-gray-800 self-center mt-7 px-14 py-4 rounded-lg max-md:px-5">
        Contact us
      </button>
      <div className="items-stretch self-stretch flex w-full flex-col mt-28 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="bg-gray-300 flex w-[1262px] shrink-0 w-full h-px flex-col max-md:mr-2.5" />
        <div className="text-gray-700 text-2xl font-bold tracking-tight mt-8 max-md:max-w-full max-md:mr-2.5">
          UniCraft
        </div>
        <div className="text-gray-400 text-lg font-medium tracking-tight w-[1262px] mt-3 max-md:max-w-full max-md:mr-2.5">
          Design amazing digital experiences that
          <br />
          create more happy in the world.
        </div>
        <div className="items-stretch content-center flex-wrap flex justify-between gap-5 mt-8 max-md:max-w-full max-md:mr-2.5">
          <div className="text-gray-400 text-base leading-6 grow max-md:max-w-full">
            © 2077 Untitled UI. All rights reserved.
          </div>
          <div className="justify-between content-center flex-wrap flex gap-3 pl-5 max-md:max-w-full max-md:pl-5">
          <img loading="lazy" width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
          <img loading="lazy" width="48" height="12" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
          <img loading="lazy" width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
          <img loading="lazy" width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="github"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ElevatedPresence;