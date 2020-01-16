<?php while (have_posts()) : the_post(); ?>
    <h1 class="text-center texto-primario"><?php the_title(); ?></h1>
    <?php
    if (has_post_thumbnail()) :
        the_post_thumbnail('blog', array('class' => 'imagen-destacada'));
    endif;
    ?>

    <?php
    //Revisar si el custom post es clases
    if (get_post_type() === 'gymfitness_clases') :
        $horaInicio = get_field('hora_inicio');
        $horaFin = get_field('hora_fin');
    ?>
        <p class="informacion-clase"><?php the_field('dias_clase'); ?> - <?php echo $horaInicio ?> a <?php echo $horaFin ?></p>
    <?php
    endif;
    ?>
    <?php the_content(); ?>

<?php endwhile; ?>