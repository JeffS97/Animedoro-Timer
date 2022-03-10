import React from 'react'

function About() {
  return (
    <div className="w-11/12 mx-auto mt-15 text-white p-5">
        <div className="mt-5">
            <h1 className="text-xl sm:text-2xl font-medium"><span className="border-b-4 border-red-400">What</span> is The Animedoro Technique?</h1>
            <p className="mt-5 tracking-wide opacity-70 text-lg break-words">The animedoro technique, invented by Josh Chen is a modified version of the Pomodoro
            technique where you work in periods of 40 minutes, accompanied by a break of 20 minutes. You can do whatever you want in the 20 minute breaks however
            this technique encourages you to watch an episode of your desired anime</p>
        </div>
        <div className="mt-5">
            <h1 className="text-xl sm:text-2xl font-medium"><span className="border-b-4 border-red-400">What</span> is This Project?</h1>
            <p className="mt-5 tracking-wide opacity-70 text-lg break-words">Animedoro Timer is small clone project from 
            <a href="https://dailyfocus.vercel.app" target="blank" className="underline"> https://dailyfocus.vercel.app</a>. 
            It is open source and here is the code: <a href="https://github.com/JeffS97/Animedoro-Timer" target="blank" className="underline">https://github.com/JeffS97/Animedoro-Timer</a></p>
        </div>
    </div>
  )
}

export default React.memo(About);