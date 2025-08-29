import React from "react";
import {Page, Document, View, StyleSheet, Text, PDFViewer} from "@react-pdf/renderer";

function PDFGen() {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });


    const MyDoc = () => (<Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>2x2 Multiplication Questions</Text>
            </View>
            <View style={styles.section}>
                <Text>23 x 12</Text>
            </View>
        </Page>
    </Document>)

    return <PDFViewer style={{width: '100%', height: '90vh'}}>
            <MyDoc />
          </PDFViewer>;
}

export default PDFGen;