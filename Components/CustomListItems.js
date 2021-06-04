import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem ,Avatar} from 'react-native-elements'

const CustomListItems = ({ id,chatName,enterChat}) => {
    return (
        <ListItem>
           <Avatar
           rounded
           source={{
             uri:
               'https://files.fm/thumb_show.php?i=3g382ekcn',
            }}
           />
            <ListItem.Content>
               <ListItem.Title style={{fontWeight:"800"}}>
                   Youtube
               </ListItem.Title>
               <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test subtitle
               </ListItem.Subtitle>
            </ListItem.Content> 
        </ListItem>
    )
}

export default CustomListItems

const styles = StyleSheet.create({})
