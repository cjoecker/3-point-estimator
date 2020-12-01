import React from 'react';
/*eslint-disable react/jsx-one-expression-per-line*/
const HelpText = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Help
		</h1>
		<p>
			Add every task necessary for your project. Then, add for every task the time necessary to accomplish them.
			<br />
			The optimistic time is the time necessary for the task when everything works perfectly.
			<br />
			The expected time is the time you expect for the task be done.
			<br />
			The pessimistic time represents the worst-case scenario.
		</p>
		<p>
			On the bottom, you can set the probability with which the project is accomplished in the estimated time. If you
			select for instance 97,73%, you will accomplish the project in the calculated time with a probability of 99,7%.
		</p>
		<p>
			For more information about the 3-point estimation here, check{' '}
			<a href='https://en.wikipedia.org/wiki/Three-point_estimation' target='_blank' rel='noreferrer'>
				this article
			</a>
			{' .'}
		</p>
	</div>
);

export default HelpText;
