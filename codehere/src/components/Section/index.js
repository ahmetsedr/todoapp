import { useEffect } from "react"




function Section({ contacts, addContacts, state, setState }) {


	const onClickList = () => {
		addContacts(
			contacts.map((i) => {
				const isTodoActive = contacts.some((e) => {
					return e.todoActive === false
				})
				return isTodoActive === true
					? { ...i, todoActive: true }
					: { ...i, todoActive: false }
			})
		)
	}

	const handClickAll = (e) => {
		console.log(state)
		addContacts(state)

	}
	const handClickActive = (e) => {
		e.preventDefault()

		addContacts(contacts.filter((contact) => contact.todoActive === false))

	}
	const handClickComplated = (e) => {
		e.preventDefault()
		addContacts(contacts.filter((contact) => contact.todoActive === true))
		console.log(contacts)
	}



	const onClear = (e) => {
		e.preventDefault();
		addContacts(contacts.filter((contact) => contact.todoActive === false))
	}


	const unCompleted = contacts.filter((item) => item.todoActive === false);



	return (
		<div>

			<section className='main'>
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all" onClick={onClickList}>
					Mark all as complete
				</label>

				<ul className='todo-list'>
					{contacts.map((contact, i) =>

						<li key={i} className={contact.todoActive ? "completed" : ''}>

							<div className="view" >
								<input
									className="toggle"
									type="checkbox"
									checked={contact.todoActive}
									onChange={() => {
										addContacts(
											contacts.map((i) => {
												return i === contact
													? { ...i, todoActive: !i.todoActive }
													: i
											})
										)
									}} />
								<label>{contact.todoName}</label>
								<button
									className="destroy"
									onClick={() => {
										addContacts(contacts.filter((remove) => remove !== contact))
									}}
								></button>


							</div>
						</li>
					)
					}
				</ul>
			</section>
			<footer className="footer">
				<span className="todo-count">
					<strong>{unCompleted.length}  items left</strong>
				</span>

				<ul className="filters">


					<li>
						<a href="#/"
							id="all"
							className={contacts.todoActive === null ? "selected" : ""}
							onClick={handClickAll}
						>All</a>
					</li>
					<li>
						<a href="#/"
							id='active'
							className={contacts.todoActive === false ? "selected" : ""}
							onClick={handClickActive}
						>Active</a>
					</li>
					<li>
						<a href="#/"
							id='completed'
							className={contacts.todoActive === true ? "selected" : ""}
							onClick={handClickComplated}
						>Completed</a>
					</li>

				</ul>

				<button
					className='clear-completed'
					onClick={onClear}>
					Clear completed
				</button>
			</footer>
		</div >
	)
}

export default Section
