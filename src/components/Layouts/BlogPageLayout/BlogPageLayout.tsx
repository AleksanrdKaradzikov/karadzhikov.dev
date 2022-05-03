import React, { FC } from 'react';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { BlogList } from '../../BlogList';
import { ArticleToRender } from '../../../models/articleModel';

interface Props {
    articles: ArticleToRender[];
}

const BlogPageLayout: FC<Props> = ({ articles }) => {
    const leftBarShow = useBreakpointValue({ base: false, md: false, lg: true });

    return (
        <Grid
            pt="32px"
            gridTemplateColumns={{
                base: '1fr',
                md: '1f',
                lg: '1fr 300px'
            }}
            gridGap="32px"
        >
            <GridItem
                display="grid"
                alignSelf="start"
                gridGap="30px"
            >
                <BlogList articles={articles} />
            </GridItem>
            {leftBarShow && (
                <GridItem>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quibusdam blanditiis assumenda velit natus eaque dolore, sunt aliquam aliquid enim hic quam vero! Est, provident! Esse eaque provident cupiditate quod sint illum rerum ullam. Doloremque ad quam possimus enim quisquam delectus officiis veniam unde accusantium perspiciatis non dolor at similique, provident inventore quia fugiat perferendis. Reprehenderit ipsum, optio quidem blanditiis aut debitis sequi sunt earum incidunt corporis ipsam modi inventore dolor sed excepturi odio maxime voluptatem vitae fugit, magni possimus velit officia? Esse earum, temporibus, ut quae voluptates sunt in perspiciatis nesciunt modi rem nihil officia facere porro maxime pariatur!
                </GridItem>
            )}
        </Grid>
    );
}

export default BlogPageLayout;