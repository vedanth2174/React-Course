import React from 'react'

function Card({username}){
    console.log(username)
    return(
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div class="text-slate-700 dark:t">
                Staff Engineer, Algolia
            </div>
            </figcaption>
        </div>
        </figure>
    )
}

export default Card