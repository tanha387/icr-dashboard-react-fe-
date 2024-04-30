import React, { useState, useEffect, useRef } from 'react';
import 'react-input-range/lib/css/index.css';
import '../../styles/AllUsIpo.css'
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChartsUi = ({
    title,
    stateValue,
}) => {

    const colors = ["#F4BE37", "#9939AC", "#FF9F40", "#5388D8", "#0D2535"];

    const Options = {
        // theme: "dark2",
        animationEnabled: false,
        hoverEnabled: false,
        // exportFileName: "New Year Resolutions",
        exportEnabled: false,
        // title: {
        //   text: "Top Categories of New Year's Resolution"
        // },
        data: [{
            type: "pie",
            legendText: "",
            toolTipContent: "",
            indexLabel: "",
            indexLabelPlacement: "inside",
            // startAngle: -90,
            dataPoints: stateValue?.map((item, index) => ({
                y: item?.value,
                // label: item.label,
                color: colors[index % colors?.length]
            }))
        }]
    };
    return (
        <div className='w-[500px] flex flex-col overflow-hidden rounded-lg border border-lightGrey'>
            <div className='flex justify-start items-center border-b border-lightGrey w-full'>
                <h3 className='py-4 px-6 font-inter-bold font-semibold text-base text-lightBlack'>
                    {title}
                </h3>
            </div>
            <div className='flex justify-start items-center relative gap-4 flex-wrap py-4'>
                <div className='w-96 pieContainer'>
                    {stateValue?.length > 0 && <CanvasJSChart options={Options} />}
                </div>
                <div className='h-full flex flex-col gap-2 legendsContainer'>
                    {
                        stateValue?.map((item, index) => (
                            <div key={index} className='flex w-max h-full gap-2'>
                                <div className={`rounded-full w-[8px] h-[8px] mt-1`} style={{ backgroundColor: colors[index % colors?.length] }}></div>
                                <div className=' flex flex-col items-start justify-start gap-1'>
                                    <h3 className='font-inter text-steelBlue text-sm '>{item?.slug}</h3>
                                    <h3 className='font-inter-bold text-base text-black'>
                                        {item?.value}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PieChartsUi
