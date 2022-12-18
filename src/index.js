// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Test import of external libraries
const $ = require('jquery')
const d3 = require('d3')

// Appending to the DOM
const logo = $('<img />', {src: webpackLogo})

const heading = $('<h1 />', {html: example()})

// Test a background image url in CSS
const imageBackground = $('<div />', {class: 'image'})

// Test a public folder asset
const imagePublic = $('<img />', {src: '/assets/example.png'})

// Add all to root
const app = $('#root')
app.append(logo, heading, imageBackground, imagePublic)


d3.csv('/assets/income_evaluation.csv', function(d) {
    // convert to numerical values
    d.age = +d.age
    d.fnlwgt = +d.fnlwgt
    d.education_num = +d.education_num
    d.capital_gain = +d.capital_gain
    d.capital_loss = +d.capital_loss
    d.hours_per_week = +d.hours_per_week

    return d
}).then(function(data) {
    // Your d3 drawing code comes here
    // The below example draws a simple "scatterplot"
    console.log(data)

    const w = 400, h = 400

    var svg = d3.select('#root')
        .append("svg")
        .attr('id', 'drawing')
        .attr('height', h)
        .attr('width', w)

    svg.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', function(d) {
            return d.education_num / 18.0 * w;
        })
        .attr('cy', function(d) {
            return d.hours_per_week / 100.0 * h
        })
        .attr('r', 3)
}) 



