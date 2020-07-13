import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

/*
	Display:
		Month
		Year
		Dates
	Figure out:
		Month
		How many days in the month
		Which weekday does the first day start in
	Functions:
		Toggle Month and Year
		Show todays 
*/

export default function Calendar() {
	const [date, setDate] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState(0);
	const [days, setDays] = useState(0);
	const [today, setToday] = useState(0);
	const [firstWeekday, setFirstWeekday] = useState(0);

	useEffect(() => {
		// get date and split
		const thisDate = new Date();
		const thisMonth = thisDate.getMonth();
		const thisYear = thisDate.getFullYear();
		const numDays = new Date(thisYear, thisMonth + 1, 0).getDate();
		const todayDate = thisDate.getDate();
		const firstDate = new Date(thisYear, thisMonth, 1).getDay();
		// set state
		setDate(thisDate);
		setMonth(thisMonth);
		setYear(thisYear);
		setDays(numDays);
		setToday(todayDate);
		setFirstWeekday(firstDate);
	}, []);

	const renderDays = () => {
		const numWeeks = weekCount();
		let weeks = [];
		let currDay = 1;
		for (let w = 0; w < numWeeks; w++) {
			let week = [];
			for (let d = 0; d < 7 && currDay <= days; d++) {
				if (currDay === 1 && d !== firstWeekday) {
					week.push(<div className={styles.blank} key={`blank${d}`}><wbr /></div>);
					continue;
				}
				let style = [styles.day]
				if (currDay === today) style.push(styles.today)
				week.push(<button className={style.join(' ')} key={currDay}>{currDay}</button>);
				currDay++;
			}
			weeks.push(<div className={styles.week} key={`week${w}`}>{week}</div>);
		}
		return weeks;
	}

	const weekCount = () => {
		var firstOfMonth = new Date(year, month - 1, 1);
		var lastOfMonth = new Date(year, month, 0);

		var used = firstOfMonth.getDay() + lastOfMonth.getDate();
		// plus 1 just in case month starts late
		return Math.ceil(used / 7) + 1;
	}

	const monthName = () => {
		const options = { month: 'long' };
		return Intl.DateTimeFormat('en-US', options).format(date)
	}

	const changeYear = increment => {
		const newYear = year + increment;
		const thisDate = new Date(newYear, month, today);
		const numDays = new Date(newYear, month + 1, 0).getDate();
		const firstDate = new Date(newYear, month, 1).getDay();
		setDate(thisDate);
		setYear(newYear);
		setDays(numDays);
		setFirstWeekday(firstDate);
	}

	const changeMonth = increment => {
		let newMonth = month + increment;
		let newYear = year;
		if (newMonth < 0) {
			newMonth = 11;
			newYear--;
		}
		if (newMonth > 11) {
			newMonth = 0;
			newYear++;
		}
		const thisDate = new Date(newYear, newMonth, today);
		const numDays = new Date(newYear, newMonth + 1, 0).getDate();
		const firstDate = new Date(newYear, newMonth, 1).getDay();
		setDate(thisDate);
		setMonth(newMonth);
		setYear(newYear);
		setDays(numDays);
		setFirstWeekday(firstDate);
	}

	return (
		<div className={styles.Calendar}>
			<div className={styles.header}>
				<button onClick={() => changeYear(-1)}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
				<button onClick={() => changeMonth(-1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
				<div>
					{monthName()} {year}
				</div>
				<button onClick={() => changeMonth(1)}><FontAwesomeIcon icon={faAngleRight} /></button>
				<button onClick={() => changeYear(1)}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
			</div>
			<div className={styles.month}>
				<div className={styles.weekdays}>
					<div>Su</div>
					<div>Mo</div>
					<div>Tu</div>
					<div>We</div>
					<div>Th</div>
					<div>Fr</div>
					<div>Sa</div>
				</div>
				{renderDays()}
			</div>
		</div>
	);
}