import { gsap } from 'gsap'
import { FC, useEffect, useRef } from 'react'

const LoadingIndicator: FC = () => {
	const svgRef = useRef(null)
	const block1Ref = useRef()
	const block2Ref = useRef()
	const block3Ref = useRef()
	const block4Ref = useRef()
	const block5Ref = useRef()
	const block6Ref = useRef()
	const block7Ref = useRef()
	const block8Ref = useRef()
	const block9Ref = useRef()
	const block10Ref = useRef()
	const block11Ref = useRef()
	const block12Ref = useRef()

	const delay = 0.08
	const tl = gsap.timeline({ repeat: -1, repeatDelay: delay })

	useEffect(() => {
		tl.to(block1Ref.current, { duration: 0, opacity: 0, delay }, delay)
			.to(block11Ref.current, { duration: 0, x: 0, y: 24, delay }, delay)
			.to(block12Ref.current, { duration: 0, x: -8, y: 40, delay }, delay)

			.to(block1Ref.current, { duration: 0, opacity: 1, x: 24, y: 72, delay: delay * 2 }, delay * 2)
			.to(block3Ref.current, { duration: 0, x: -8, y: 40, delay: delay * 2 }, delay * 2)
			.to(block11Ref.current, { duration: 0, x: 8, y: 72, delay: delay * 2 }, delay * 2)

			.to(block1Ref.current, { duration: 0, x: 24, y: 104, delay: delay * 3 }, delay * 3)
			.to(block3Ref.current, { duration: 0, x: -8, y: 64, delay: delay * 3 }, delay * 3)
			.to(block4Ref.current, { duration: 0, x: -24, y: 64, delay: delay * 3 }, delay * 3)

			.to(block2Ref.current, { duration: 0, x: 8, y: 72, delay: delay * 4 }, delay * 4)
			.to(block3Ref.current, { duration: 0, x: 16, y: 112, delay: delay * 4 }, delay * 4)
			.to(block4Ref.current, { duration: 0, x: -24, y: 40, delay: delay * 4 }, delay * 4)

			.to(block2Ref.current, { duration: 0, x: -8, y: 104, delay: delay * 5 }, delay * 5)
			.to(block4Ref.current, { duration: 0, x: -24, y: 64, delay: delay * 5 }, delay * 5)
			.to(block6Ref.current, { duration: 0, x: 0, y: 56, delay: delay * 5 }, delay * 5)

			.to(block4Ref.current, { duration: 0, x: -48, y: 112, delay: delay * 6 }, delay * 6)
			.to(block5Ref.current, { duration: 0, x: 16, y: 64, delay: delay * 6 }, delay * 6)
			.to(block6Ref.current, { duration: 0, x: 0, y: 32, delay: delay * 6 }, delay * 6)

			.to(block5Ref.current, { duration: 0, x: 32, y: 96, delay: delay * 7 }, delay * 7)
			.to(block6Ref.current, { duration: 0, x: 0, y: 56, delay: delay * 7 }, delay * 7)
			.to(block7Ref.current, { duration: 0, x: -16, y: 56, delay: delay * 7 }, delay * 7)

			.to(block6Ref.current, { duration: 0, x: 8, y: 88, delay: delay * 8 }, delay * 8)
			.to(block7Ref.current, { duration: 0, x: -16, y: 64, delay: delay * 8 }, delay * 8)
			.to(block9Ref.current, { duration: 0, x: -8, y: 24, delay: delay * 8 }, delay * 8)

			.to(block7Ref.current, { duration: 0, x: -24, y: 88, delay: delay * 9 }, delay * 9)
			.to(block8Ref.current, { duration: 0, x: 8, y: 24, delay: delay * 9 }, delay * 9)
			.to(block9Ref.current, { duration: 0, x: -8, y: 56, delay: delay * 9 }, delay * 9)

			.to(block8Ref.current, { duration: 0, x: 8, y: 48, delay: delay * 10 }, delay * 10)
			.to(block9Ref.current, { duration: 0, x: -8, y: 72, delay: delay * 10 }, delay * 10)
			.to(block10Ref.current, { duration: 0, x: 0, y: 40, delay: delay * 10 }, delay * 10)

			.to(block8Ref.current, { duration: 0, x: 8, y: 72, delay: delay * 11 }, delay * 11)
			.to(block10Ref.current, { duration: 0, x: 0, y: 64, delay: delay * 11 }, delay * 11)

			.to(svgRef.current, { duration: 0, rotation: -45, delay: delay * 12 }, delay * 12)
			.to(block1Ref.current, { duration: 0, rotation: -45, x: 20, y: 110, delay: delay * 12 }, delay * 12)
			.to(block2Ref.current, { duration: 0, rotation: -45, x: -7, y: 110, delay: delay * 12 }, delay * 12)
			.to(block3Ref.current, { duration: 0, rotation: -45, x: -23, y: 88, delay: delay * 12 }, delay * 12)
			.to(block4Ref.current, { duration: 0, rotation: -45, x: -50, y: 110, delay: delay * 12 }, delay * 12)
			.to(block5Ref.current, { duration: 0, rotation: -45, x: 23, y: 102, delay: delay * 12 }, delay * 12)
			.to(block6Ref.current, { duration: 0, rotation: -45, x: 18, y: 102, delay: delay * 12 }, delay * 12)
			.to(block7Ref.current, { duration: 0, rotation: -45, x: -20, y: 91, delay: delay * 12 }, delay * 12)
			.to(block8Ref.current, { duration: 0, rotation: -45, x: 4, y: 72, delay: delay * 12 }, delay * 12)
			.to(block9Ref.current, { duration: 0, rotation: -45, x: -12, y: 61, delay: delay * 12 }, delay * 12)
			.to(block10Ref.current, { duration: 0, rotation: -45, x: 7, y: 75, delay: delay * 12 }, delay * 12)
			.to(block11Ref.current, { duration: 0, rotation: -45, x: -15, y: 59, delay: delay * 12 }, delay * 12)
			.to(block12Ref.current, { duration: 0, rotation: -45, x: -26, y: 27, delay: delay * 12 }, delay * 12)

			.to(svgRef.current, { duration: 0, rotation: -90, delay: delay * 13 }, delay * 13)
			.to(block6Ref.current, { duration: 0, rotation: -45, x: 7, y: 80, delay: delay * 13 }, delay * 13)

			.to(svgRef.current, { duration: 0, rotation: -135, delay: delay * 14 }, delay * 14)
			.to(block5Ref.current, { duration: 0, rotation: -45, x: 23, y: 69, delay: delay * 14 }, delay * 14)
	})

	return (
		<div className="w-[104px]">
			<svg version="1.1" ref={svgRef} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 104 176" xmlSpace="preserve">
				<path d="M0 12v12h8v40h8v8h8v8h8v16h-8v8h-8v8H8v40H0v24h104v-24h-8v-40h-8v-8h-8v-8h-8V80h8v-8h8v-8h8V24h8V0H0v12zm88 0v4H16V8h72v4zm0 28v16h-8v8h-8v8h-8v8h-8v16h8v8h8v8h8v8h8v32H16v-32h8v-8h8v-8h8v-8h8V80h-8v-8h-8v-8h-8v-8h-8V24h72v16zm0 124v4H16v-8h72v4z" />
				<path d="M24 36v4h8v-8h-8v4z" ref={block1Ref} />
				<path d="M40 36v4h8v-8h-8v4z" ref={block2Ref} />
				<path d="M56 36v4h8v-8h-8v4z" ref={block3Ref} />
				<path d="M72 36v4h8v-8h-8v4z" ref={block4Ref} />
				<path d="M32 44v4h8v-8h-8v4z" ref={block5Ref} />
				<path d="M48 44v4h8v-8h-8v4z" ref={block6Ref} />
				<path d="M64 44v4h8v-8h-8v4z" ref={block7Ref} />
				<path d="M40 52v4h8v-8h-8v4z" ref={block8Ref} />
				<path d="M56 52v4h8v-8h-8v4z" ref={block9Ref} />
				<path d="M48 60v4h8v-8h-8v4z" ref={block10Ref} />
				<path d="M48 76v4h8v-8h-8v4z" ref={block11Ref} />
				<path d="M48 108v4h8v-8h-8v4z" ref={block12Ref} />
			</svg>
		</div>
	)
}

export default LoadingIndicator
