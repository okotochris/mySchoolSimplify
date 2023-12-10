const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogschema = new Schema({
    eng: {
        type:String,
        required:true
    },
    eng1st:{
        type:String,
        required:true
    },
    eng2st:{
        type:String,
        required:true
    },
    engexam:{
        type:String,
        required:true
    },
    engG:{
        type:String,
        required:true
    },
    mth:{
        type: String,
        required: true
    },
    mth1st:{
        type: String,
        required: true
    },
    mth2nd:{
        type: String,
        required: true
    },
    mthexam:{
        type: String,
        required: true
    },
    mthG:{
        type: String,
        required: true
    },
    bsc:{
        type: String,
        required: true
    },
    bsc1st:{
        type: String,
        required: true
    },
    bsc2nd:{
        type: String,
        required: true
    },
    bscexam:{
        type: String,
        required: true
    },
    bscG:{
        type: String,
        required: true
    },
    btc:{
        type: String,
        required: true
    },
    btc1st:{
        type: String,
        required: true
    },
    btc2nd:{
        type: String,
        required: true
    },
    btcexam:{
        type: String,
        required: true
    },
    btcG:{
        type: String,
        required: true
    },
    hec:{
        type: String,
        required: true
    },
    hec1st:{
        type: String,
        required: true
    },
    hec2nd:{
        type: String,
        required: true
    },
    hecexam:{
        type: String,
        required: true
    },
    hecG:{
        type: String,
        required: true
    },
    fre:{
        type: String,
        required: true
    },
    fre1st:{
        type: String,
        required: true
    },
    fre2nd:{
        type: String,
        required: true
    },
    freexam:{
        type: String,
        required: true
    },
    freG:{
        type: String,
        required: true
    },
    agr:{
        type: String,
        required: true
    },
    agr1st:{
        type: String,
        required: true
    },
    agr2nd:{
        type: String,
        required: true
    },
    agrexam:{
        type: String,
        required: true
    },
    csc:{
        type: String,
        required: true
    },
    csc1st:{
        type: String,
        required: true
    },
    csc2nd:{
        type: String,
        required: true
    },
    cscexam:{
        type: String,
        required: true
    },
    cscG:{
        type: String,
        required: true
    },
    crs:{
        type: String,
        required: true
    },
    crs1st:{
        type: String,
        required: true
    },
    crs2nd:{
        type: String,
        required: true
    },
    crsexam:{
        type: String,
        required: true
    },
    crsG:{
        type: String,
        required: true
    },
    ped:{
        type: String,
        required: true
    },
    ped1st:{
        type: String,
        required: true
    },
    ped2st:{
        type: String,
        required: true
    },
    pedG:{
        type: String,
        required: true
    },
    cra:{
        type: String,
        required: true
    },
    cra1st:{
        type: String,
        required: true
    },
    cra2nd:{
        type: String,
        required: true
    },
    craexam:{
        type: String,
        required: true
    },
    craG:{
        type: String,
        required: true
    },
    hiy:{
        type: String,
        required: true
    },
    hiy1st:{
        type: String,
        required: true
    },
    hiy2nd:{
        type: String,
        required: true
    },
    hiyexam:{
        type: String,
        required: true
    },
    hiyG:{
        type: String,
        required: true
    },
    std:{
        type: String,
        required: true
    },
    std1st:{
        type: String,
        required: true
    },
    std2nd:{
        type: String,
        required: true
    },
    stdexam:{
        type: String,
        required: true
    },
    stdG:{
        type: String,
        required: true
    },
    ced:{
        type: String,
        required: true
    },
    ced1st:{
        type: String,
        required: true
    },
    ced2nd:{
        type: String,
        required: true
    },
    cedexam:{
        type: String,
        required: true
    },
    cedG:{
        type: String,
        required: true
    },
    bst:{
        type: String,
        required: true
    },
    bst1st:{
        type: String,
        required: true
    },
    bst2nd:{
        type: String,
        required: true
    },
    bstexam:{
        type: String,
        required: true
    },
    bstG:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    studentId:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    term:{
        type: String,
        required: true
    },
    schoolName:{
        type: String,
        required: true
    },
    schoolAdd:{
        type: String,
        required: true
    },

}, {timestamps:true })
const Blog = mongoose.model('Blog', blogschema)
module.exports = Blog;
