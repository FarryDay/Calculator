import { Button } from '@rneui/themed'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
	const [display, setDisplay] = useState(0),
		[firstNumber, setFirstNumber] = useState(null),
		[secondNumber, setSecondNumber] = useState(null),
		[operation, setOperation] = useState(null)

	const btnClick = value => {
		// Если не число
		switch (isNaN(value)) {
			case true:
				if (value == '←') {
					if (!isNaN(firstNumber) && secondNumber == null) {
						setFirstNumber(() => {
							setDisplay(
								`${
									firstNumber?.length == 1 || firstNumber == '' || !firstNumber
										? 0
										: firstNumber.slice(0, -1)
								}`
							)

							return `${
								firstNumber?.length == 1 || firstNumber == '' || !firstNumber
									? ''
									: firstNumber.slice(0, -1)
							}`
						})
					} else {
						setSecondNumber(() => {
							setDisplay(
								`${
									secondNumber?.length == 1 ||
									secondNumber == '' ||
									!secondNumber
										? 0
										: secondNumber.slice(0, -1)
								}`
							)

							return `${
								secondNumber?.length == 1 || secondNumber == '' || !secondNumber
									? ''
									: secondNumber.slice(0, -1)
							}`
						})
					}
				} else if (value == 'C') {
					setFirstNumber(null)
					setSecondNumber(null)
					setOperation(null)
					setDisplay('0')
				} else if (value == '=') {
					switch (operation) {
						case '+':
							setFirstNumber(
								String(Number(firstNumber) + Number(secondNumber)).replace(
									/\.0/g,
									''
								)
							)
							setDisplay(
								String(Number(firstNumber) + Number(secondNumber)).replace(
									/\.0/g,
									''
								)
							)
							setOperation(null)
							setSecondNumber(null)
							break
						case '-':
							setFirstNumber(
								String(Number(firstNumber) - Number(secondNumber)).replace(
									/\.0/g,
									''
								)
							)
							setDisplay(
								String(Number(firstNumber) - Number(secondNumber)).replace(
									/\.0/g,
									''
								)
							)
							setOperation(null)
							setSecondNumber(null)
							break
						case 'X':
							setFirstNumber(
								String(
									(Number(firstNumber) * Number(secondNumber)).toFixed(1)
								).replace(/\.0/g, '')
							)
							setDisplay(
								String(
									(Number(firstNumber) * Number(secondNumber)).toFixed(1)
								).replace(/\.0/g, '')
							)
							setOperation(null)
							setSecondNumber(null)
							break
						case '÷':
							setFirstNumber(
								String(
									(Number(firstNumber) / Number(secondNumber)).toFixed(1)
								).replace(/\.0/g, '')
							)
							setDisplay(
								String(
									(Number(firstNumber) / Number(secondNumber))
										.toFixed(1)
										.replace(/\.0/g, '')
								)
							)
							setOperation(null)
							setSecondNumber(null)
							break

						default:
							alert('Error')
							break
					}
				} else {
					if (firstNumber !== null && firstNumber?.length > 0 && !operation) {
						setOperation(() => {
							setDisplay(`0`)
							return value
						})
					}
				}
				break
			case false:
				if (!secondNumber && operation == null) {
					setFirstNumber(() => {
						setDisplay(`${!firstNumber ? '' : firstNumber}${value}`)
						return `${!firstNumber ? '' : firstNumber}${value}`
					})
				} else {
					setSecondNumber(() => {
						setDisplay(`${!secondNumber ? '' : secondNumber}${value}`)
						return `${!secondNumber ? '' : secondNumber}${value}`
					})
				}
				break
			default:
				alert('Error')
				break
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.textInput}>
				<Text style={{ fontSize: 24 }}>{display}</Text>
			</View>
			<View style={[styles.main]}>
				<View style={styles.block}>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='C'
						onPress={() => btnClick('C')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='÷'
						onPress={() => btnClick('÷')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='X'
						onPress={() => btnClick('X')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='←'
						onPress={() => btnClick('←')}
					/>
				</View>
				<View style={styles.block}>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='7'
						onPress={() => btnClick('7')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='8'
						onPress={() => btnClick('8')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='9'
						onPress={() => btnClick('9')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='-'
						onPress={() => btnClick('-')}
					/>
				</View>
				<View style={styles.block}>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='4'
						onPress={() => btnClick('4')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='5'
						onPress={() => btnClick('5')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='6'
						onPress={() => btnClick('6')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='+'
						onPress={() => btnClick('+')}
					/>
				</View>
				<View style={styles.block}>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='1'
						onPress={() => btnClick('1')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='2'
						onPress={() => btnClick('2')}
					/>
					<Button
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
						title='3'
						onPress={() => btnClick('3')}
					/>
					<Button
						type='outline'
						titleStyle={[styles.buttonTitle, { color: 'orange' }]}
						buttonStyle={[styles.button, { borderColor: 'orange' }]}
						title='='
						onPress={() => btnClick('=')}
					/>
				</View>
				<View>
					<Button
						title='0'
						onPress={() => btnClick('0')}
						type='outline'
						titleStyle={styles.buttonTitle}
						buttonStyle={styles.button}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-end',
	},
	textInput: {
		borderColor: 'orange',
		borderWidth: 2,
		borderRadius: 20,
		marginBottom: 5,
		width: '100%',
		padding: 20,
		marginTop: 100,
		marginBottom: 20,
	},
	main: {
		backgroundColor: '#1c1c1d',
		width: '100%',
		alignItems: 'center',
		gap: 20,
		paddingTop: 20,
		paddingBottom: 20,
	},
	block: {
		gap: 20,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-evenly',
		width: '100%',
	},
	buttonTitle: {
		color: '#fff',
	},
	button: {
		width: 50,
		height: 50,
		borderColor: '#fff',
	},
	title: {
		fontSize: 48,
	},
})
