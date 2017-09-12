import React, { Component } from 'react';


import "./style.css"
import { connect } from 'react-redux'
import { loadRooms } from '../actions/roomsAction';

class RoomList extends Component {
    componentWillMount() {
        this.props.loadRooms()
    }


    render() {
        const { rooms } = this.props
        const classes = this.props.classes;

        return (
             
            <div className=" contenedor contenedor_habitacion" key="Subheader" >
               {rooms.map((d, index) => (
                    <div className="habitacion" key={d.image}>
                        <div className="img">
                            <img src={d.image} alt={d.name} />
                        </div>
                        <div className="info_rooms">
                            <div className="info">
                                <h3>
                                    {d.name}
                                </h3>
                                <p>
                                   S/ {d.price}
                                </p>
                            </div>
                            <div className="info info_color">
                                <h3>
                                    Mas informacion
                                </h3>
                                <p>
                                    Reservar
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        );
    }
}


function mapStateToProps(state) {
    return {
        rooms: state.room.rooms
    }
}

function mapDispatchToProps(dispatch) {
    return {

        loadRooms: () => {
            dispatch(loadRooms());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
