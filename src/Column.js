import React from 'react';
import {Card} from './Card';

export const Column = ({name,color,cards=[]},{addACard})=>{
	return (
		<div className="column">
			<div className="header" style={{background:color}}>
				<div>{name}</div>
			</div>
			{
				cards.map((card,i)=>(
					<Card key={i} {...card}/>
				))
			}
			<div>
				<button onClick={()=>addACard(name,{title:'added'})}>+ add a card</button>
			</div>
		</div>
	);
}
Column.contextTypes = {
	addACard : React.PropTypes.func
}