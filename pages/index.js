import React, {useRef, useEffect, useState} from "react";
import About from "../components/About";
import Alarm from "../components/Alarm";
import ModalSetting from "../components/ModalSetting";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer"
import Todo from "../components/Todo";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer";


export default function index() {

	const [pomodoro, setPomodoro] = useState(40);
	const [anime, setAnime] = useState(20);
	const [seconds, setSecond] = useState(0);
	const [stage, setStage] = useState(0);
	const [ticking, setTicking] = useState(false);
	const [consumedSeconds, setConsumedSeconds] = useState(0);
	const [isTimeUp, setIsTimeUp] = useState(false);
	
	const [todoItem, setTodoItem] = useState("");
  	const [items, setItems] = useState([]);
	
	const [openSetting, setOpenSetting] = useState(false);

	const alarmRef = useRef();
	const pomodoroRef = useRef();
	const animeRef = useRef();

	const handleEnter = (event) => {
		if (event.key === "Enter") {
		  handleAdd();
		}
	  };

	const handleAdd = () => {
		if (todoItem) {
			setItems([
			{
				id: uuidv4(),
				message: todoItem,
				done: false,
			},
			...items,
			]);

			setTodoItem("");
		}
	};
	
	const handleDone = (id) => {
		const _items = items.map((item) => {
			if (item.id === id) {
			return {
				...item,
				done: !item.done,
			};
			}

			return item;
		});

		setItems(_items);
	};

	const deleteAllList = () =>{
		setItems([]);
	}

	const updateTimeDefaultValue = () => {
		setPomodoro(pomodoroRef.current.value);
		setAnime(animeRef.current.value);
		setOpenSetting(false);
		setSecond(0);
		setConsumedSeconds(0);
	}

	const switchStage = (index) => {
		const isYes = consumedSeconds && stage != index ? confirm("Are you sure you want to take end this early?") : false;
		if(isYes){
			reset();
			setStage(index);
		}
		else if(!consumedSeconds){
			setStage(index);
			}
	};

	const getTickingTime = () => {
		const timeStage = {
			0:pomodoro,
			1:anime,
		}
		return timeStage[stage];
	}

	const updateMinute = () => {
		const updateStage = {
			0:setPomodoro,
			1:setAnime,
		}
		return updateStage[stage];
	}

	const reset = () => {
		setConsumedSeconds(0);
		setTicking(false);
		setSecond(0);
		updateTimeDefaultValue();

	}

	const timeUp = () => {
		reset();
		setIsTimeUp(true);
		alarmRef.current.play();
	}

	const clockTicking = () => {
		const minutes = getTickingTime();
		const setMinutes = updateMinute();

		if(minutes == 0 && seconds == 0){
			timeUp();
		}
		else if (seconds == 0){
			setMinutes((minute)=> minute-1);
			setSecond(59);
		}
		else{
			setSecond((seconds)=>seconds-1)
		}
	}

	const muteAlarm = () => {
		alarmRef.current.pause();
		alarmRef.current.currentTime = 0;
	}

	const startTimer = () =>{
		setIsTimeUp(false);
		muteAlarm();
		setTicking((ticking)=> !ticking);
	}

	useEffect(() => {
		window.onbeforeunload = () => {
			return consumedSeconds ? "Show warning" : null;
		}
		const timer = setInterval(()=>{
			if(ticking){
				setConsumedSeconds(value => value+1)
				clockTicking();
			}
			
		}, 1000);

		return () =>{
			clearInterval(timer);
		};
	}, [seconds, pomodoro, anime, ticking]);

	return (
		<div className="bg-gray-900 min-h-screen font-inter">
			<div className="max-w-4xl mx-auto">
				<Navigation setOpenSetting={setOpenSetting}/>
			</div>
			<div className="max-w-2xl min-h-screen mx-auto">
				
				<Timer 
					stage={stage} 
					switchStage={switchStage} 
					getTickingTime={getTickingTime}
					seconds={seconds}
					ticking={ticking}
					startTimer={startTimer}
					muteAlarm={muteAlarm}
					isTimeUp={isTimeUp}
					reset={reset}/>
				<Todo
					items={items}
					setItems={setItems}
					todoItem={todoItem}
					setTodoItem={setTodoItem}
					handleEnter={handleEnter}
					handleDone={handleDone}
					handleAdd={handleAdd}
					deleteAllList={deleteAllList}
					/>
				<Alarm ref={alarmRef}/>
				<ModalSetting 
					openSetting={openSetting} 
					setOpenSetting={setOpenSetting} 
					pomodoroRef={pomodoroRef} 
					animeRef={animeRef}
					updateTimeDefaultValue={updateTimeDefaultValue}/>
			</div>
			<div className="h-0.5 mx-auto w-9/12 bg-gray-800"></div>
			<div className="bg-gray-900 min-h-screen font-inter">
				<div className="max-w-4xl mx-auto">
					<About/>
				</div>
					<Footer/>
			</div>
		</div>
	);
}
