import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="bg-white shadow dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Movie Max™</Link>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="https://www.linkedin.com/in/mahesh-kumar-a-60019411a/" target='_blank' rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
				</li>
			</ul>
			</div>
		</footer>
	)
}

export default Footer