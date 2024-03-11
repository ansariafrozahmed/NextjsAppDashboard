<template>
    <div
        class="sidebar fixed top-0 -left-[260px] z-[51] w-[260px] flex-none bg-white shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] duration-500 lg:relative lg:left-0"
    >
        <div class="sticky top-0">
            <div class="p-3">
                <a href="/" class="inline-flex items-center gap-2">
                    <img class="ml-[5px] w-8 flex-none" src="/assets/images/logo.svg" alt="image" />
                    <span class="text-2xl font-semibold">VRISTO</span>
                </a>
            </div>
            <div class="h-[calc(100vh_-_60px)] overflow-auto border-t border-dashed border-black-light/30 pb-5">
                <ul class="text-[15px] font-semibold" @click="$emit('closeSidebar')">
                    <li>
                        <NuxtLink to="/documentation" class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary">
                            Getting Started
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/documentation/installation-next"
                            class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary"
                        >
                            Next Installation
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/documentation/installation-react"
                            class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary"
                        >
                            React Installation
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/documentation/installation-react-laravel"
                            class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary"
                        >
                            React + Laravel Installation
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/documentation/intro-layouts" class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary">
                            Layouts
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/documentation/theme-integration"
                            class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary"
                        >
                            Theme Integration
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/documentation/theme-color-customization"
                            class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary"
                        >
                            Theme Color Customization
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/documentation/attributions" class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary">
                            Attributions
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/documentation/support" class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary">
                            Support
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/documentation/changelog" class="block py-2 px-4 duration-500 hover:bg-black-light/10 hover:pl-6 hover:text-primary">
                            Changelog
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
