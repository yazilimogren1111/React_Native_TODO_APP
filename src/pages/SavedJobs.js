import React,{useState} from 'react'
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler';
import { JobItem } from '../components/JobItem';

export const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState('')

    AsyncStorage.getItem('@SAVED_JOBS')
    .then(res =>{
        const list = JSON.parse(res);
        setSavedJobs(list)
    })

    console.log('{ "name":"John", "age":30, "city":"New York"}')
    const obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    console.log(obj)
    return (
        <View>
           <FlatList
           data = {savedJobs}
           renderItem = {({item}) => <JobItem item={item}/>}
            />
        </View>
    )
}
