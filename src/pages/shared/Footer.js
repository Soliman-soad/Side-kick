import React from 'react';
import navImg from '../../image/withBG.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <img alt="" className="w-8 h-8 rounded-full ring-2 ring-offset-4  ring-white " src={navImg} />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<p>All rights and condition preserved by Soliman</p>
				</li>
				
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a href="#">Instagram</a>
			</li>
			<li>
				<a href="#">Facebook</a>
			</li>
			<li>
				<a href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;