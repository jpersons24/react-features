import React from 'react'
import virtualDom1 from "../images/virtual-dom-1.png";
import virtualDom2 from '../images/virtual-dom-2.png';
import virtualDom3 from '../images/virtual-dom-3.png';

const VirtualDom = () => {
  return (
		<div className="virtual-dom">
			<h3>What is the Virtual DOM? How does it work?</h3>
			<ul className="numbered-list">
				<li>
					The Virtual DOM is a lightweight JavaScript object which starts as
					copy of the real DOM.
				</li>
				<li>
					A node tree that lists elements, their attributes and content as
					objects and object properties.
				</li>
				<li>The render function creates the node tree of React components.</li>
				<li>
					The node tree is updated in response to mutations in data model.
				</li>
			</ul>
			<p>Virtual DOM works in 3 simple steps:</p>
			<ol>
				<li>
					Whenever underlying data changes, the entire UI is re-rendered in
					Virtual DOM representation.
					<br></br>
					<img src={virtualDom1} alt="virtual DOM step 1" />
				</li>
				<li>
					Then, the difference between the previous DOM representation and new
					one is calculated.
					<br></br>
					<img src={virtualDom2} alt="virtual DOM step 1" />
				</li>
				<li>
					Once calculations are done, real DOM will be updated with only things
					that have been actually changed.
					<br></br>
					<img src={virtualDom3} alt="virtual DOM step 1" />
				</li>
			</ol>
		</div>
	);
}

export default VirtualDom;
