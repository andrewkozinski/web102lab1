import React from "react";
import Event from './Event'

const Calendar = () => {
    
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <Event event='Starbucks ☕️' color ='green' location='Midtown'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Javits Center' color ='blue' location="Hell's Kitchen, Manhattan"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <Event event="Office Hours" color='pink' location='Farmingdale (Virtual)'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='NYC'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location='NYC'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='NYC'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color='green' location='NYC'/>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Calendar;