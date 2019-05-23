import React , {Component} from 'react'
import Buttons from './Buttons'

export default class Display extends Component {
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }

    handlePrevious=()=>{
        if(this.state.index>0){
            this.setState({
                index:this.state.index-1
                // index:--this.state.index //this works too (but this.state.index-- wouldn't work)
            })
        }
    }

    handleNext=()=>{
        if(this.state.index < this.props.data.length-1){
            this.setState({
                index:this.state.index+1
                // index:++this.state.index //this works too (but this.state.index++ wouldn't work)
            })
        }
    }


    render(){
        console.log(this.props.data)
        let employees = this.props.data.map((person)=>{
            console.log(person)
            let movies = person.favoriteMovies.map(movie=>{
                return(
                        <li>{movie}</li>
                )
            })
            return(
                <div key={person.id}>
                    <h1>{person.name.first} {person.name.last}</h1>
                    <h3>From: {person.city}, {person.country}</h3>
                    <h3>Job Title: {person.title} </h3>
                    <h3>Employer: {person.employer} </h3>
                    <h3>Favorite Movies:</h3>
                    <ol>
                        {movies}
                    </ol>
                </div>
            )
        })
        return(
            <div>
                {employees[this.state.index]}
                <Buttons handlePrevious={this.handlePrevious} handleNext={this.handleNext}/>
            </div>
        )
    }
}