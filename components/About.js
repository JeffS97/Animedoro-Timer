import React from 'react'

function About() {
  return (
    <div className="w-11/12 mx-auto text-white p-5">
        <div className="mt-20">
            <h1 className="text-xl sm:text-2xl font-medium "><span className="border-b-4 border-red-800">What</span> is The Animedoro Technique?</h1>
            <p className="mt-5 tracking-wide text-lg break-words opacity-80 text-gray-300">The animedoro technique, invented by Josh Chen is a modified version of the Pomodoro
            technique where you work in periods of 40 minutes, accompanied by a break of 20 minutes. You can do whatever you want in the 20 minute breaks however
            this technique encourages you to watch an episode of your desired anime</p>
        </div>
        <div className="mt-20">
            <h1 className="text-xl sm:text-2xl font-medium"><span className="border-b-4 border-red-800">What</span> is This Project?</h1>
            <p className="mt-5 tracking-wide opacity-80 text-gray-300 text-lg break-words">Animedoro Timer is a modified clone project from 
            <a href="https://dailyfocus.vercel.app" target="blank" className="underline"> https://dailyfocus.vercel.app</a>. 
            It is open source and here is the code: <a href="https://github.com/JeffS97/Animedoro-Timer" target="blank" className="underline">https://github.com/JeffS97/Animedoro-Timer</a></p>
        </div>
        <div className="mt-20">
            <h1 className="text-xl sm:text-2xl font-medium"><span className="border-b-4 border-red-800">How</span> to use this timer?</h1>
            <ol className="mt-5 tracking-wide opacity-80 text-gray-300 text-md break-words"> 
              <li>1. <span className="tracking-wide font-bold break-words">Add tasks</span> to work on</li>
              <li>2. <span className="tracking-wide font-bold break-words">Start timer</span> and focus on tasks for 40 minutes</li>
              <li>3. <span className="tracking-wide font-bold break-words">Click</span> on the task to mark it as complete</li>
              <li>4. Take a <span className="tracking-wide font-bold break-words">break</span> - watch an episode of an Anime when the alarm rings</li>
              <li>5. <span className="tracking-wide font-bold break-words">Iterate</span> as many times as you like</li>
            </ol>
        </div>

    </div>
  )
}

export default React.memo(About);