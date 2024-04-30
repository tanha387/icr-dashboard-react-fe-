import React, { useState, useEffect } from 'react';
import 'react-input-range/lib/css/index.css';
import { getPxChangeChart } from '../../api/allUsIpos.js'
import LoadingComponent from '../LoadingComponent.jsx';
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import '../../styles/AllUsIpo.css';



const PxModal = ({ position, pxChnageId }) => {
    const [pxLoading, setPxLoading] = useState(false);
    const [pxChangeData, setPxChangeData] = useState([]);

    const fetchPxChangeData = async (pxValue) => {
        try {
            setPxLoading(true);
            const response = await getPxChangeChart(pxValue);
            setPxChangeData(response?.pxChangeData);
        } catch (error) {
            toast.error('Failed to fetch px change data');
        } finally {
            setPxLoading(false);
        }
    }

    useEffect(() => {

        if (pxChnageId !== null) {
            console.log('fetching px change data');
            fetchPxChangeData(pxChnageId)
        }
    }, [pxChnageId]);

    const options = {
        animationEnabled: false,
        axisY: {
            title: "Closing Price",
            gridThickness: 0,
            lineColor: "transparent",
            tickColor: "transparent",
            interval: 20,
        },
        axisX: {
            gridThickness: 0,
            lineColor: "transparent",
            tickColor: "transparent",
            interval: 3,
            intervalType: "month",
        },
        data: [{
            type: "splineArea",
            lineColor: "#F59638",
            markerSize: 0,
            color: "#FFE8D1",
            lineThickness: 2,
            // xValueFormatString: "YYYY",
            // yValueFormatString: "#,##0.## bn kW⋅h",
            showInLegend: false,
            legendText: "Date",
            dataPoints: pxChangeData?.map(data => ({ x: new Date(data?.x), y: data?.y }))
        }]
    };


    // Calculate modal position relative to the table
    const modalTop = parseInt(position.top); // Adjust as needed
    const modalLeft = parseInt(position.left) - 370; // Adjust as needed

    let modalStyle = {};

    if (modalTop >= 225) {
        modalStyle = {
            position: 'absolute',
            top: `325px`,
            left: `${modalLeft}px`,
            backgroundColor: 'white',
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            // borderRadius: '4px',
            padding: '20px',
            zIndex: '40'
        };
    } else {
        modalStyle = {
            position: 'absolute',
            top: `253px`,
            left: `${modalLeft}px`,
            backgroundColor: 'white',
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            // borderRadius: '4px',
            padding: '20px',
            zIndex: '40'
        };
    }


    return (
        <div style={modalStyle} className='flex w-[600px] h-[500px] px-7 py-10 pxCustom flex-wrap rounded-lg overflow-hidden shadow-lg'>
            {
                pxLoading ?
                    <LoadingComponent /> : (
                        <div className='flex flex-col w-[500px] items-start justify-start'>
                            {
                                pxChangeData.length > 0 && (
                                    <>
                                        <div className='w-[320px] h-[200px] flex flex-col justify-center items-center'>
                                            <CanvasJSChart options={options} />

                                        </div>
                                        <h3 className='flex w-full justify-center items-center font-inter text-xs text-lightBlack'>
                                            Date
                                        </h3>
                                    </>
                                )
                            }
                        </div>
                    )
            }

        </div>
    );
}

export default PxModal;

