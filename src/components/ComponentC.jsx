import {Data,Data2,Data3,Data4} from '../App.jsx'

export const ComponentC =()=>{

    return(
        <div>
          <Data.Consumer>
              {(name)=>{
                  return (
                      <Data2.Consumer>
                          {(age)=>{
                              return (
                                  <Data3.Consumer>
                                      {(dateOfBirth)=>{
                                          return (
                                              <Data4.Consumer>
                                                  {(myFavouriteNumbers)=>{
                                                      return (
                                                          <h1>My name is : {name} and my age is {age} and year
                                                              is {dateOfBirth.dateOfBirth} and my favourite numbers {myFavouriteNumbers[0]}</h1>
                                                      )
                                                  }}
                                              </Data4.Consumer>

                                          )
                                      }}
                                  </Data3.Consumer>
                              )
                          }}
                      </Data2.Consumer>
                  )
              }}
          </Data.Consumer>
        </div>
    )
}
