import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import index from './index.vue'

describe('index', () => {
    it('highlights the clicked square', async () => {
        const { getByRole, queryByRole } = await render(index)

        const e4 = getByRole('cell', { name: 'Square e4' })
        const e5 = getByRole('cell', { name: 'Square e5' })

        // Click e4.
        await fireEvent.click(e4)

        // Expect e4 to be highlighted.
        expect(e4).toContain(getByRole('mark', { name: 'Highlight e4' }))

        // Click e5.
        await fireEvent.click(e5)

        // Expect e4 NOT to be highlighted.
        expect(queryByRole('mark', { name: 'Highlight e4' })).toBeNull()

        // Expect e5 to be highlighted.
        expect(e5).toContain(getByRole('mark', { name: 'Highlight e5' }))
    })

    it('renders the click list', async () => {
        const { getByRole } = await render(index)

        // Click e4, e5, f4.
        await fireEvent.click(getByRole('cell', { name: 'Square e4' }))
        await fireEvent.click(getByRole('cell', { name: 'Square e5' }))
        await fireEvent.click(getByRole('cell', { name: 'Square f4' }))

        // Expect click list is rendered with correct content.
        expect(getByRole('list', { name: 'Click list' }).textContent)
            .toMatchInlineSnapshot(`"1. e42. e53. f4"`)
    })
})
