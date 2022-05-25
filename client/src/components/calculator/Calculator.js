import { Fragment } from "react";
import Numpad from "./Numpad";
import Operation from "./Operation";
import '../css/calc.css';

function Calculator() {

    return (
        <Fragment>
            <div id="row">
                <div className="mt-5"><Operation/></div>
            </div>
            <div className="mt-2" id="row">
                <div id="first"><Numpad value='1'/></div>
                <div className="ml-3" id="second"><Numpad value='2'/></div>
                <div className="ml-3" id="third"><Numpad value='3'/></div>
                <div className="ml-3" id="fourth"><Numpad value='+'/></div>
            </div>
            <div id="row">
                <div id="first"><Numpad value='4'/></div>
                <div className="ml-3" id="second"><Numpad value='5'/></div>
                <div className="ml-3" id="third"><Numpad value='6'/></div>
                <div className="ml-3" id="fourth"><Numpad value='-'/></div>
            </div>
            <div id="row">
                <div id="first"><Numpad value='7'/></div>
                <div className="ml-3" id="second"><Numpad value='8'/></div>
                <div className="ml-3" id="third"><Numpad value='9'/></div>
                <div className="ml-3" id="fourth"><Numpad value='*'/></div>
            </div>
            <div id="row">
                <div id="first"><Numpad value='0'/></div>
                <div className="ml-3" id="second"><Numpad value='.'/></div>
                <div className="ml-3" id="third"><Numpad value='='/></div>
                <div className="ml-3" id="fourth"><Numpad value='/'/></div>
            </div>
            <div id="row">
                <div id="first"><Numpad value='Cl'/></div>
                <div className="ml-3" id="second"><Numpad value='M+'/></div>
                <div className="ml-3" id="third"><Numpad value='M-'/></div>
                <div className="ml-3" id="fourth"><Numpad value='MR'/></div>
            </div>
        </Fragment>
    );
}

export default Calculator;
