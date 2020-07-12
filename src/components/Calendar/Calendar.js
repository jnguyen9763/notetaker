import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css'

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

		return Math.ceil(used / 7);
	}

	const monthName = () => {
		const options = { month: 'long' };
		return Intl.DateTimeFormat('en-US', options).format(date)
	}

	return (
		<div className={styles.Calendar}>
			<div className={styles.header}>
				<div>
					{monthName()} {year}
				</div>
				<button><i className='fas fa-angle-down'></i></button>
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