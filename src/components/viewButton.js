import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ViewpointCard extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedView : null }
    };
    
    render() {     
        return (
            <div className='row'>
             <div className='col-md-4 text-center'>
                <Button 
                variant="primary"
                size='lg'
                onClick={() => this.setState({selectedView:'col-sm-4'})}        
                >
                    Hiển thị 3 cột
                </Button>
            </div>
            
            <div className='col-md-4 text-center'>
                <Button 
                variant="primary"
                size='lg'     
                onClick={() => this.setState({selectedView:'col-sm-6'})}        
                >
                    Hiển thị 2 cột
                </Button>
            </div>

            <div className='col-md-4 text-center'>
                <Button 
                variant="primary"
                size='lg'     
                onClick={() => this.setState({selectedView:'col-sm-12'})}        
                >
                    Hiển thị 1 cột
                </Button>
            </div>
            </div>
        )};

}
export default ViewpointCard;